import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const galleryItems = [
    {
      title: 'Learning Process',
      description: 'Explore effective learning methodologies, cognitive development strategies, and modern educational approaches that enhance understanding and retention.',      imageUrl: '/media/topics/learning.jpg',
      id: 'learning-process',
      fallbackUrl: '/media/logo.jpg'
    },
    {
      title: 'Spiritual Power & Music',
      description: 'Explore the connection between mind, body, and soul, meditation practices, and the role of spirituality in personal growth.',
      imageUrl: '/media/topics/spiritual.jpg',
      id: 'spiritual-power-music'
    },
     {
      title: 'Moral Duties',
      description: 'Understanding ethical principles, personal responsibilities, and the importance of moral values in shaping character and society.',
      imageUrl: '/media/topics/moral.jpg',
      id: 'moral-duties'
    },
    {
      title: 'Social Duty & Studies',
      description: 'Understanding our responsibilities towards society, community engagement, and the integration of social consciousness with academic pursuits.',
      imageUrl: '/media/topics/social.jpg',
      id: 'social-duty'
    },
    {
      title: 'Policy & Public Administration',
      description: 'Analysis of governance systems, public policy formation, and the implementation of administrative practices for societal development.',
      imageUrl: '/media/topics/policy.jpg',
      id: 'policy-admin'
    },
    {
      title: 'Indian Economy Highways,Railways & Defence Corridor',
      description: 'Exploring India\'s economic growth through infrastructure development, focusing on highway networks and defense manufacturing corridors.',
      imageUrl: '/media/topics/economy.jpg',
      id: 'indian-economy'
    },
    {
      title: 'Cultural & Historical Issues',
      description: 'Examining India\'s rich cultural heritage and historical events that have shaped our nation\'s identity and values.',
      imageUrl: '/media/topics/culture-history.jpg',
      id: 'culture-history'
    },
    {
      title: 'National & International Issues',
      description: 'Comprehensive coverage of domestic and global affairs, analyzing policies and events that impact our world.',
      imageUrl: '/media/topics/international.jpg',
      id: 'international-issues'
    },
    {
      title: 'Agriculture & Environment',
      description: 'Understanding sustainable farming practices, environmental conservation, and the balance between development and nature.',
      imageUrl: '/media/topics/agriculture.jpg',
      id: 'agriculture-environment'
    },
    {
      title: 'Mathematics & Universe',
      description: 'Exploring mathematical concepts and their applications in understanding the cosmos and universal phenomena.',
      imageUrl: '/media/topics/mathematics.jpg',
      id: 'mathematics-universe'
    },
    {
      title: 'Sports & Games',
      description: 'Discover the world of sports, physical education, and games that promote fitness, teamwork, and personal growth.',
      imageUrl: '/media/topics/sports.jpg',
      id: 'sports-games'
    },
    {
      title: 'Current Affairs',
      description: 'Stay updated with the latest developments in politics, economy, society, and technology shaping our world today.',
      imageUrl: '/media/topics/current-affairs.jpg',
      id: 'current-affairs'
    }
  ];

  useEffect(() => {
    // Preload all images
    Promise.all(
      galleryItems.map(item => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = item.imageUrl;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if an image fails to load
        });
      })
    ).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Learning Topics</h1>
      <div className={`gallery ${isLoading ? 'loading' : ''}`}>
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item" onClick={() => navigate(`/topic/${item.id}`)}>
            <div className="gallery-item-content">              <div className="image-container">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  onError={(e) => {
                    console.log(`Failed to load image: ${item.imageUrl}`);
                    e.target.src = item.fallbackUrl || '/media/logo.jpg';
                    e.target.onerror = null;
                    e.target.closest('.image-container').classList.add('image-error');
                  }}
                  onLoad={(e) => {
                    e.target.closest('.image-container').classList.add('image-loaded');
                  }}
                />
                <div className="image-loading-overlay">
                  <div className="loading-spinner"></div>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>              <button className="explore-button">
                <span>Explore This Topic</span>
                {/* <span className="button-arrow">⟶</span> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
