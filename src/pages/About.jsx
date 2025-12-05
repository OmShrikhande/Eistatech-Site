import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Eistatech';
  }, []);

  return (
    <div className="about">
      <section className="about-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>About Eistatech</h1>
            <p className="hero-subtitle">Pioneering the future of automation technology</p>
          </div>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card fade-in-up">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>To revolutionize industries through innovative automation technologies, streamlining processes, increasing efficiency, and driving sustainable growth for businesses worldwide.</p>
            </div>
            <div className="mv-card fade-in-up">
              <div className="mv-icon">🔮</div>
              <h2>Our Vision</h2>
              <p>To be the global leader in automation solutions, empowering companies to achieve their full potential in an increasingly digital and automated world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story section">
        <div className="container">
          <h2 className="text-center">Our Story</h2>
          <div className="story-content">
            <div className="story-text fade-in-up">
              <p>Founded in 2020, Eistatech emerged from a vision to bridge the gap between traditional industries and cutting-edge technology. Our founders, recognizing the transformative power of automation, set out to create solutions that would not just improve efficiency but redefine how businesses operate.</p>
              <p>Starting with a small team of passionate engineers and innovators, we've grown into a dynamic startup that combines deep technical expertise with creative problem-solving. Our journey has been marked by continuous learning, adaptation, and a relentless commitment to excellence.</p>
            </div>
            <div className="story-stats fade-in-up">
              <div className="stat-item">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values section">
        <div className="container">
          <h2 className="text-center">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card fade-in-up">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries and embrace cutting-edge technologies to deliver forward-thinking solutions.</p>
            </div>
            <div className="value-card fade-in-up">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and partnerships to achieve extraordinary results.</p>
            </div>
            <div className="value-card fade-in-up">
              <div className="value-icon">💡</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in everything we do, delivering high-quality solutions that exceed expectations.</p>
            </div>
            <div className="value-card fade-in-up">
              <div className="value-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>We develop solutions that are not only efficient but also environmentally conscious and sustainable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline section">
        <div className="container">
          <h2 className="text-center">Our Journey</h2>
          <div className="timeline-container">
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2020 - Foundation</h3>
                <p>Eistatech was founded with a vision to revolutionize automation technology.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021 - First Breakthrough</h3>
                <p>Launched our flagship IoT integration platform, serving 50+ clients.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2022 - Expansion</h3>
                <p>Expanded our team to 30 members and opened offices in two major cities.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023 - Innovation Peak</h3>
                <p>Introduced AI-powered automation solutions and achieved 300% growth.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2024 - Global Recognition</h3>
                <p>Recognized as one of the top 10 automation startups globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;