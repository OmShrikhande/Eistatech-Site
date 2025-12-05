import { useEffect } from 'react';
import './Services.css';

const Services = () => {
  useEffect(() => {
    document.title = 'Services - Eistatech';
  }, []);

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
              <div className="service-icon">⚙️</div>
              <h3>Process Automation</h3>
              <p>Streamline your workflows with intelligent automation systems that reduce manual effort and eliminate errors. Our solutions include RPA, workflow automation, and business process optimization.</p>
              <ul className="service-features">
                <li>Robotic Process Automation (RPA)</li>
                <li>Workflow Optimization</li>
                <li>Quality Assurance Automation</li>
              </ul>
            </div>

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
              <div className="service-icon">🔧</div>
              <h3>System Integration</h3>
              <p>Seamlessly integrate disparate systems and applications to create a unified ecosystem. Break down data silos and enable smooth data flow across your organization.</p>
              <ul className="service-features">
                <li>API Development</li>
                <li>Legacy System Modernization</li>
                <li>Cloud Migration</li>
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
          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default Services;