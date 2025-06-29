import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function TopicDetail() {
  const { topicId } = useParams();
  const [activeTab, setActiveTab] = useState(() => {
    // Get the saved tab from localStorage, default to 'text' if none exists
    return localStorage.getItem(`${topicId}-activeTab`) || 'text';
  });

  // Save active tab to localStorage whenever it changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem(`${topicId}-activeTab`, tabId);
  };

  const tabs = [
    { id: 'text', label: 'Text' },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'qna', label: 'Q&A' }
  ];

  // Topic content data
  const topicContent = {
    'culture-history': {
      videos: [
        {
          title: 'World tallest Jain statue(108 feet) of Bhagwan Rishabhdeva at Mangi Tungi, Nashik',
          url: '/media/topics/culture-history/videos/jain-statue-mangi-tungi.mp4',
          description: `Construction:
The statue was built under the inspiration of Jain nun Gyanmati and the guidance of Aryika Chandanamati, and was completed in 2016.

Importance:
Mangi-Tungi hills are a pilgrimage site for the Jain community, especially for Marathi and Gujarati Jains.`
        }
      ]
    },    'indian-economy': {
      videos: [
        {
          title: 'Video 1',
          url: '/media/topics/economy/videos/video1.mp4',
          description: 'Description of video 1'
        },
        {
          title: 'Video 2',
          url: '/media/topics/economy/videos/video2.mp4',
          description: 'Description of video 2'
        }
      ],
      images: [
        {
          title: 'Image 1',
          url: '/media/topics/economy/images/image1.jpg',
          description: 'Description of image 1'
        }
      ]
    }
  };

  return (
    <div className="topic-detail">
      <div className="tab-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'text' && (
          <div className="text-content">
            <h2>Text Material</h2>
            <div className="content-placeholder">
              Text content for this topic will be displayed here
            </div>
          </div>
        )}        {activeTab === 'images' && (
          <div className="images-content">
            <h2>Images</h2>
            {topicContent[topicId]?.images ? (
              <div className="images-grid">
                {topicContent[topicId].images.map((image, index) => (
                  <div key={index} className="image-item">
                    <h3>{image.title}</h3>
                    <div className="image-container">
                      <img src={image.url} alt={image.title} />
                    </div>
                    {image.description && (
                      <div className="image-description">
                        {image.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="content-placeholder">
                Image gallery for this topic will be displayed here
              </div>
            )}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="videos-content">
            <h2>Videos</h2>
            {topicContent[topicId]?.videos ? (
              <div className="videos-grid">
                {topicContent[topicId].videos.map((video, index) => (
                  <div key={index} className="video-item">
                    <h3>{video.title}</h3>
                    <div className="video-container">
                      <video controls>
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {video.description && (
                      <div className="video-description">
                        {video.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="content-placeholder">
                Video content for this topic will be displayed here
              </div>
            )}
          </div>
        )}

        {activeTab === 'qna' && (
          <div className="qna-content">
            <h2>Questions & Answers</h2>
            <div className="content-placeholder">
              Q&A section for this topic will be displayed here
            </div>
          </div>
        )}
      </div>

      <style>{`
        .videos-grid {
          display: grid;
          gap: 2rem;
          padding: 1rem;
        }        .images-grid {
          display: grid;
          gap: 2rem;
          padding: 1rem;
        }

        .video-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1rem;
        }

        .video-item h3 {
          margin-bottom: 1rem;
          color: #ffd700;
          font-size: 1.2rem;
        }

        .video-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .video-description {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          white-space: pre-line;
          color: #e0e0e0;
          line-height: 1.6;
        }

        .image-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1rem;
        }

        .image-item h3 {
          margin-bottom: 1rem;
          color: #ffd700;
          font-size: 1.2rem;
        }        .image-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .image-container img:hover {
          transform: scale(1.05);
        }

        .image-description {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
