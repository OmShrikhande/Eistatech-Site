import { useEffect } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  useEffect(() => {
    document.title = 'Services - Eistatech';
  }, []);
  const navigate = useNavigate();
  return (
    <div className="services">
      <section className="services-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Our Services</h1>
            <p className="hero-subtitle">Comprehensive automation solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      <section className="services-main section">
        <div className="container">
          <div className="services-intro fade-in-up">
            <h2>Transform Your Business with Cutting-Edge Automation</h2>
            <p>From intelligent process automation to IoT integration, we deliver end-to-end solutions that drive efficiency and innovation.</p>
          </div>

          <div className="services-grid">
            

            <div className="service-card fade-in-up">
              <div className="service-icon">🌐</div>
              <h3>IoT Integration</h3>
              <p>Connect and control devices seamlessly with our IoT solutions. Monitor, analyze, and automate your physical assets for maximum efficiency and predictive maintenance.</p>
              <ul className="service-features">
                <li>Device Connectivity</li>
                <li>Real-time Monitoring</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">💻</div>
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions built to meet your specific business requirements. From web applications to mobile apps, we deliver scalable and robust software products.</p>
              <ul className="service-features">
                <li>Web Applications</li>
                <li>Mobile Development</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">📊</div>
              <h3>Data Analytics & AI</h3>
              <p>Gain actionable insights from your data with advanced analytics tools and AI-powered solutions. Make data-driven decisions that drive business growth.</p>
              <ul className="service-features">
                <li>Machine Learning Models</li>
                <li>Business Intelligence</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>

          

            <div className="service-card fade-in-up">
              <div className="service-icon">🛡️</div>
              <h3>Cybersecurity Solutions</h3>
              <p>Protect your digital assets with comprehensive cybersecurity solutions. From threat detection to compliance management, we ensure your systems remain secure.</p>
              <ul className="service-features">
                <li>Threat Monitoring</li>
                <li>Compliance Management</li>
                <li>Incident Response</li>
              </ul>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">🛡️</div>
              <h3>Machine Learning Solution</h3>
              <p>We create smart machine learning solutions that power automation, prediction, and data-driven growth. From model development to deployment, we help businesses unlock the true value of their data.</p>
              <ul className="service-features">
                <li>Intelligent Data Insights</li>
                <li>Automation & Prediction</li>
                <li>End-to-End Implementation</li>
              </ul>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">🛡️</div>
              <h3>Workshop and Training </h3>
              <p>Our education and training services are designed to nurture innovation, technical excellence, and problem-solving skills through hands-on learning and expert mentorship.</p>
              <ul className="service-features">
                <li>Internship & skill development programs</li>
                <li>Industry-relevant topics</li>
                <li>Real world Problem Solution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="container">
          <h2 className="text-center">Our Process</h2>
          <div className="process-steps">
            <div className="process-step fade-in-up">
              <div className="step-number">01</div>
              <h3>Discovery & Analysis</h3>
              <p>We begin by understanding your business needs, challenges, and goals through comprehensive analysis.</p>
            </div>
            <div className="process-step fade-in-up">
              <div className="step-number">02</div>
              <h3>Design & Planning</h3>
              <p>Our experts design tailored solutions and create detailed implementation plans.</p>
            </div>
            <div className="process-step fade-in-up">
              <div className="step-number">03</div>
              <h3>Development & Testing</h3>
              <p>We build and rigorously test solutions to ensure quality and reliability.</p>
            </div>
            <div className="process-step fade-in-up">
              <div className="step-number">04</div>
              <h3>Deployment & Support</h3>
              <p>Seamless deployment followed by ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta section">
        <div className="container text-center">
          <h2>Ready to Automate Your Success?</h2>
          <p>Let's discuss how our solutions can transform your business operations.</p>
          <button className="btn btn-primary" onClick={() => navigate('/contact')}>Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Services;