import { useEffect } from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  useEffect(() => {
    document.title = 'Services - EISTATECH';
  }, []);
  const navigate = useNavigate();
  return (
    <div className="services">
      <section className="services-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Our Services</h1>
            <p className="hero-subtitle">Industry-focused training and smart technology solutions in AI, IoT, and Automation for students, institutions, and businesses.</p>
          </div>
        </div>
      </section>

      <section className="services-main section">
        <div className="container">
          <div className="services-intro fade-in-up">
            <h2>Building Intelligent Technology for the Future</h2>
            <p>From AI-powered software, IoT and automation to drone manufacturing and hands-on training programs, we deliver end-to-end technology solutions for businesses and institutions.</p>
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
              <h3>Drone Development</h3>
              <p>We design and develop intelligent drone solutions by integrating Machine Learning, AI, IoT, and embedded systems. From prototype development to real-world applications, our drones are built for automation, data collection, surveillance, and smart decision-making.</p>
              <ul className="service-features">
                <li>Autonomous Flight Systems</li>
                <li>AI & ML-based Object Detection</li>
                <li>IoT-Enabled Data Monitoring</li>
                <li>Custom Drone Prototyping</li>
              </ul>
            </div>

            <div className="service-card fade-in-up featured-stem-card">
              <div className="service-icon">🎓</div>
              <div className="stem-badge-tag">Core School Subject</div>
              <h3>School IoT & Robotics STEM Curriculum</h3>
              <p>We empower schools by integrating IoT and Robotics directly into the student academic curriculum as a regular subject, complete with hands-on labs and hardware kits.</p>
              <ul className="service-features">
                <li>In-School Curriculum Integration</li>
                <li>Arduino, ESP32 & Robotics Hardware Kits</li>
                <li>Expert Mentor Workshops & STEM Fairs</li>
              </ul>
            </div>

            <div className="service-card fade-in-up">
              <div className="service-icon">💡</div>
              <h3>Workshop & Industry Training</h3>
              <p>Our education services nurture technical excellence and problem-solving skills through hands-on learning, internships, and expert mentorship.</p>
              <ul className="service-features">
                <li>Internship & Skill Development</li>
                <li>Industry-Relevant Technologies</li>
                <li>Real-World Problem Solving</li>
              </ul>
            </div>
          </div>

          {/* Detailed STEM Curriculum Breakdown */}
          <div className="stem-curriculum-showcase fade-in-up">
            <div className="stem-curriculum-header">
              <h2>Bringing Robotics & IoT into School Classrooms</h2>
              <p>Our structured curriculum equips school students with future-ready tech skills early in their academic journey.</p>
            </div>
            <div className="stem-grid">
              <div className="stem-pillar">
                <div className="pillar-num">01</div>
                <h4>Curriculum Alignment</h4>
                <p>Designed for middle and high school students with grade-appropriate syllabus, practical manuals, and interactive projects.</p>
              </div>
              <div className="stem-pillar">
                <div className="pillar-num">02</div>
                <h4>Hands-on Hardware Kits</h4>
                <p>Plug-and-play microcontrollers, sensors, motors, and robotics chassis provided for every student team.</p>
              </div>
              <div className="stem-pillar">
                <div className="pillar-num">03</div>
                <h4>Robotics & IoT Labs</h4>
                <p>Setting up dedicated IoT & Innovation Labs in partner schools with complete hardware & software support.</p>
              </div>
              <div className="stem-pillar">
                <div className="pillar-num">04</div>
                <h4>Expos & Competitions</h4>
                <p>Mentoring students to build real working prototypes for state and national level STEM competitions.</p>
              </div>
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