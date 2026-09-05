import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '/Gallery/fish2.mp4',
    '/Gallery/fish.mp4',
    // '/Gallery/animal.mp4'
  ];

  useEffect(() => {
    document.title = 'Eistatech Pvt Ltd - Innovative IoT, AI & Automation Solutions';
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="home">
      <section className="hero">
        <video 
          key={videos[currentVideoIndex]}
          autoPlay 
          muted 
          playsInline
          onEnded={handleVideoEnd}
          className="hero-video"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="container">
          <div className="hero-content fade-in-up">
            <div className="badge-wrapper">
              <div className="new-launch-badge school-badge" onClick={() => navigate('/services')}>
                <span className="badge-pulse pulse-gold"></span>
                🎓 Achievement: IoT & Robotics STEM Subject Introduced in Schools!
              </div>
              <div className="new-launch-badge" onClick={() => navigate('/product')}>
                <span className="badge-pulse"></span>
                ✨ New: Geopunch is Live!
              </div>
            </div>
            <h1>EISTATECH PVT. LTD. <br /> IoT, Automation & AI Solutions</h1>
            <p>Eistatech Private Limited delivers cutting-edge smart home automation,
IoT systems, AI-based solutions, and hands-on IoT & Robotics education in schools across India.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/services')}>Get Started</button>
              <button className="btn btn-secondary" onClick={() => navigate('/about')}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* School IoT & Robotics Achievement Section */}
      <section className="school-stem-section section">
        <div className="container">
          <div className="school-stem-card fade-in-up">
            <div className="school-stem-visual">
              <div className="stem-image-frame">
                <img src="/Gallery/school_robotics.png" alt="School Students Learning IoT & Robotics" className="stem-image" />
                <div className="stem-floating-badge">
                  <span className="stem-icon">⚡</span> In-School Practical Curriculum
                </div>
              </div>
            </div>
            <div className="school-stem-info">
              <div className="school-label">Major Achievement</div>
              <h2>Building the Next Generation of Tech Innovators</h2>
              <p>
               We help schools bring <strong>IoT, microcontrollers, electronics, coding, and robotics</strong> into their classrooms through structured curriculum, hands-on hardware kits, and practical project-based learning.
              </p>
              <ul className="school-highlights">
                <li>🤖 <strong>Hands-on Hardware Kits:</strong> Arduino, ESP32, sensors & motors tailored for school grade levels.</li>
                <li>📚 <strong>Structured School Syllabus:</strong> Interactive lessons integrated right into the academic curriculum.</li>
                <li>🏆 <strong>Future Tech Leaders:</strong> Preparing school students for national STEM and innovation expos.</li>
              </ul>
              <div className="school-actions">
                <button className="btn btn-primary" onClick={() => navigate('/services')}>
                  <strong>View Training Program</strong>
                </button>
                <button className="btn btn-secondary-dark" onClick={() => navigate('/portfolio')}>
                  View Student Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section - Geopunch */}
      <section className="featured-product section">
        <div className="container">
          <div className="product-showcase-card">
             <div className="product-info">
               <div className="product-label">Just Launched</div>
               <h2>Geopunch: The Ultimate Employee Management App</h2>
               <p>Elevate your workforce efficiency with Geopunch. Track attendance, manage tasks, and streamline operations with our cutting-edge AI-powered software.</p>
               <ul className="product-highlights">
                 <li>✓ Real-time Location Tracking</li>
                 <li>✓ Automated Attendance Records</li>
                 <li>✓ Performance Analytics</li>
               </ul>
               <button className="btn btn-primary pulse-btn" onClick={() => navigate('/product')}>
                 Discover Geopunch
               </button>
             </div>
             <div className="product-visual">
               <div className="floating-mockup">
                 <div className="mockup-frame">
                   <div className="mockup-screen">
                     <img src="/App1.jpeg" alt="Geopunch App Interface" className="mockup-image" />
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="text-center">Why Choose EISTATECH?</h2>
          <div className="features-grid">
            <div className="feature fade-in-up">
              <div className="feature-icon">🚀</div>
              <h3>Automation Expertise</h3>
              <p>Years of experience in designing and implementing sophisticated automation systems that reduce costs and increase productivity.</p>
            </div>
            <div className="feature fade-in-up">
              <div className="feature-icon">🎓</div>
              <h3>STEM Education Leadership</h3>
              <p>Empowering the next generation with practical IoT and robotics training embedded directly inside school academic curriculums.</p>
            </div>
            <div className="feature fade-in-up">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>We leverage the latest technologies including AI, IoT, and machine learning to create custom solutions tailored to your unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
          <div className="container text-center">
          <h2>Ready to Automate Your Future?</h2>
          <p>Join hundreds of businesses and institutions that have transformed with EISTATECH.</p>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>Contact Us Today</button>
        </div>
      </section>

      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">School Students Trained</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Team Experts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;