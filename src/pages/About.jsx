import { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Eistatech Pvt Ltd';
  }, []);

  return (
    <div className="about">
      <section className="about-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>About EISTATECH PVT. LTD.</h1>
            <p className="hero-subtitle">Pioneering IoT, AI/ML & Automation Solutions</p>
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
              <p>Founded in 2025, EISTATECH emerged from a vision to bridge the gap between traditional industries and cutting-edge technology. Our founders, recognizing the transformative power of automation, set out to create solutions that would not just improve efficiency but redefine how businesses operate.</p>
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
                <h3>2024 – Beginning</h3>
                <p>Started experimenting with IoT, automation, and small hardware–software prototype projects.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2025 – Foundation & Expansion</h3>
                <p>EISTATECH was established to build smart automation solutions, expanding into large-scale development, IoT Bus Tracking systems, and AI/ML integration.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Early 2026 – GeoPunch Software Launch</h3>
                <p>Launched GeoPunch, our first flagship software product for real-time employee attendance, task tracking, and workforce management.</p>
              </div>
            </div>
            <div className="timeline-item fade-in-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>June 2026 – IoT & Robotics STEM in Schools</h3>
                <p>Introduced practical IoT and Robotics as a structured STEM subject in school academic curriculums, empowering hundreds of young innovators.</p>
              </div>
            </div>
            <div className="timeline-item highlight-item fade-in-up">
              <div className="timeline-dot highlight-dot"></div>
              <div className="timeline-content highlight-content">
                <span className="milestone-badge">🎉 Major Milestone</span>
                <h3>2026 – Incorporated as Eistatech Private Limited</h3>
                <p>Officially attained Private Limited corporate status as <strong>Eistatech Private Limited</strong>, scaling operations into an enterprise-ready technology firm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;