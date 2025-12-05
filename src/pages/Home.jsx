import { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Eistatech - Innovative Automation Solutions';
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Transform Your Business with Automation</h1>
            <p>Eistatech delivers cutting-edge automation solutions that streamline operations, boost efficiency, and drive innovation for businesses of all sizes.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="text-center">Why Choose Eistatech?</h2>
          <div className="features-grid">
            <div className="feature fade-in-up">
              <div className="feature-icon">🚀</div>
              <h3>Automation Expertise</h3>
              <p>Years of experience in designing and implementing sophisticated automation systems that reduce costs and increase productivity.</p>
            </div>
            <div className="feature fade-in-up">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>We leverage the latest technologies including AI, IoT, and machine learning to create custom solutions tailored to your unique needs.</p>
            </div>
            <div className="feature fade-in-up">
              <div className="feature-icon">🛡️</div>
              <h3>Reliable Support</h3>
              <p>Our dedicated support team ensures your systems run smoothly with 24/7 monitoring and rapid response to any issues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container text-center">
          <h2>Ready to Automate Your Future?</h2>
          <p>Join hundreds of businesses that have transformed their operations with Eistatech.</p>
          <button className="btn btn-primary">Contact Us Today</button>
        </div>
      </section>

      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Experts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;