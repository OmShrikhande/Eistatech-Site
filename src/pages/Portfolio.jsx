import { useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    document.title = 'Portfolio - Eistatech';
  }, []);

  const devices = [
    {
      id: 1,
      name: 'Smart IoT Hub',
      description: 'A centralized IoT device management platform that connects and controls multiple smart devices. Features real-time monitoring, automated controls, and energy optimization.',
      image: 'https://via.placeholder.com/300x200/007bff/ffffff?text=Smart+IoT+Hub',
      category: 'IoT'
    },
    {
      id: 2,
      name: 'Industrial Automation Controller',
      description: 'Advanced PLC-based controller for manufacturing processes. Includes predictive maintenance, quality control, and production optimization features.',
      image: 'https://via.placeholder.com/300x200/28a745/ffffff?text=Automation+Controller',
      category: 'Industrial'
    },
    {
      id: 3,
      name: 'AI-Powered Analytics Dashboard',
      description: 'Intelligent dashboard that analyzes business data using machine learning algorithms. Provides actionable insights and predictive analytics.',
      image: 'https://via.placeholder.com/300x200/ffc107/000000?text=Analytics+Dashboard',
      category: 'Analytics'
    },
    {
      id: 4,
      name: 'Robotic Process Automation Suite',
      description: 'Comprehensive RPA solution that automates repetitive business processes. Includes workflow designer, bot management, and performance monitoring.',
      image: 'https://via.placeholder.com/300x200/dc3545/ffffff?text=RPA+Suite',
      category: 'Automation'
    },
    {
      id: 5,
      name: 'Smart Building Management System',
      description: 'Integrated system for managing building operations including HVAC, lighting, security, and energy consumption optimization.',
      image: 'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Smart+Building',
      category: 'IoT'
    },
    {
      id: 6,
      name: 'Predictive Maintenance Platform',
      description: 'AI-driven platform that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
      image: 'https://via.placeholder.com/300x200/20c997/ffffff?text=Predictive+Maintenance',
      category: 'Analytics'
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Manufacturing Process Optimization',
      description: 'Implemented AI-driven process optimization for a leading automotive manufacturer, resulting in 35% efficiency improvement and 25% cost reduction.',
      technologies: ['Python', 'TensorFlow', 'IoT', 'PLC'],
      link: '#',
      github: 'https://github.com/omshrikhande/manufacturing-opt',
      category: 'Industrial'
    },
    {
      id: 2,
      name: 'Smart Warehouse Management',
      description: 'Developed an automated warehouse management system with real-time inventory tracking, predictive ordering, and robotic fulfillment.',
      technologies: ['React', 'Node.js', 'MongoDB', 'IoT'],
      link: '#',
      github: 'https://github.com/omshrikhande/smart-warehouse',
      category: 'Logistics'
    },
    {
      id: 3,
      name: 'Healthcare Automation Platform',
      description: 'Created an integrated healthcare automation platform for patient monitoring, appointment scheduling, and medical record management.',
      technologies: ['React', 'Python', 'PostgreSQL', 'AI'],
      link: '#',
      github: 'https://github.com/omshrikhande/healthcare-automation',
      category: 'Healthcare'
    },
    {
      id: 4,
      name: 'Financial Services RPA',
      description: 'Automated complex financial processes including loan processing, risk assessment, and compliance reporting for a major bank.',
      technologies: ['UiPath', 'Python', 'SQL Server', 'API'],
      link: '#',
      github: 'https://github.com/omshrikhande/finance-rpa',
      category: 'Finance'
    },
    {
      id: 5,
      name: 'Retail Analytics Dashboard',
      description: 'Built a comprehensive retail analytics platform providing real-time sales insights, inventory optimization, and customer behavior analysis.',
      technologies: ['React', 'Python', 'Power BI', 'Machine Learning'],
      link: '#',
      github: 'https://github.com/omshrikhande/retail-analytics',
      category: 'Retail'
    },
    {
      id: 6,
      name: 'Smart City Infrastructure',
      description: 'Developed smart city infrastructure management system including traffic control, waste management, and environmental monitoring.',
      technologies: ['IoT', 'Python', 'React', 'Cloud Computing'],
      link: '#',
      github: 'https://github.com/omshrikhande/smart-city',
      category: 'Smart City'
    }
  ];

  return (
    <div className="portfolio">
      <section className="portfolio-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Our Portfolio</h1>
            <p className="hero-subtitle">Showcasing innovation through technology and automation</p>
          </div>
        </div>
      </section>

      <section className="devices-section section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Our Innovative Devices</h2>
            <p>Cutting-edge hardware solutions designed for the future</p>
          </div>
          <div className="devices-grid">
            {devices.map(device => (
              <div key={device.id} className="device-card fade-in-up">
                <div className="device-image">
                  <img src={device.image} alt={device.name} />
                  <div className="device-category">{device.category}</div>
                </div>
                <div className="device-content">
                  <h3>{device.name}</h3>
                  <p>{device.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Featured Projects</h2>
            <p>Real-world solutions that drive business transformation</p>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card fade-in-up">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>View Project</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in-up">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item fade-in-up">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item fade-in-up">
              <div className="stat-number">15+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-item fade-in-up">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta section">
        <div className="container text-center">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help bring your automation vision to life.</p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;