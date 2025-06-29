export default function Home() {
  return (
        <div className="container">            
            
                <div className="quote-text">
                    Manjit Singh Meel&nbsp;
                </div>
            

            <div className="content about-content">
                <h2 className="section-title">My Journey</h2>
                <p>
                    I dream therefore I am. I dreamed of Creating. I dreamed of Soaring. I dreamed of telling Stories. I dreamed of people wanting to Listen to my Stories. Sitting in a inner corner of Heart, I dreamed. I started very Young. I wrote Articles & Poetry for my Personal Diary. The only time I felt Alive when I was Writing. I wanted to live in a World I could Create. But Destiny led me to be a Teacher. I still feel like a Misfit. But this is the best Profession to learn Everyday. I have done Everything a Teacher can. Beside Teaching, I have done best Learning for my Stories independently. I have video edited my Stories. I have done Sound mixing than I heard Song. I love my Job. And I am confirmed Workaholic. In fact there is nothing beyond work that you can I know about me. God has been kind enough I have won several awards for my Work. But I am Hungry for more. My favourite Work has been my Learning Capabilities & thinking for Nation. I like to talk less. Hence my Absence on Social Media. My Ambition in Life is to be Happy. And to keep Dreaming on with Facts...
                </p>
            </div>

            <div className="content media-content">
                <div className="profile-section">                    <div className="profile-image">
                        <img
                            src="./media/profile-image.jpg"
                            alt="Manjeet"
                            className="profile-photo"
                        />
                    </div>
                    <div className="video-section">
                        <div className="video-container">
                            <video
                                controls
                                className="profile-video"
                            >
                                <source src="./media/profile-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="content quote-content">
                <div className="quote-text">
                    And to keep Dreaming on with Facts...
                </div>
            </div> */}

            <style>{`
        .about-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .profile-section {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .profile-image, .video-section {
          flex: 1;
          width: 100%;
          min-width: 300px;
          max-width: 500px;
          aspect-ratio: 10/9;
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 78, 146, 0.3);
          transition: transform 0.3s ease;
        }

        .profile-photo:hover {
          transform: scale(1.02);
        }

        .video-container {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 78, 146, 0.3);
        }

        .profile-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .media-content {
          margin-top: 2rem;
        }

        .about-content {
          margin-bottom: 2rem;
          text-align: justify;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #fff, #004e92);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .quote-content {
          margin-top: 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(0, 78, 146, 0.2) 0%, rgba(0, 4, 40, 0.3) 100%);
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .quote-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96c93d,
            transparent
          );
          animation: rainbow 4s linear infinite;
        }

        .quote-text {
          font-family: 'Dancing Script', cursive;
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(45deg,
            #ff6b6b,
            #4ecdc4,
            #45b7d1,
            #96c93d
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
          }

          .profile-image, .video-section {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
}
