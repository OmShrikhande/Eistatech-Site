import { useEffect, useState } from 'react';
import './Team.css';
import kuldeepImg from '../assets/Kuldeep.png';
import atharvaImg from '../assets/Atharva.png';
import omImg from '../assets/om.png';
import arpitImg from '../assets/arpit.png';


const Team = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'Team - Eistatech';
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Kuldeep Tiwari',
      role: 'CEO & Founder',
      image: kuldeepImg,
      imgStyle: { objectPosition: '50% 35%' },
      bio: 'Visionary leader with 8+ years in tech innovation. Expert in strategic planning and business development.',
      skills: ['Leadership', 'Strategy', 'Business Development'],
      linkedin: 'https://github.com/kd-26-08-04',
      email: 'kdkuldeeptiwari26@gmail.com'
    },
    {
      id: 2,
      name: 'Om Shrikhande',
      role: 'Lead Software Developer',
      image: omImg,
      bio: 'Full-stack developer specializing in automation solutions. Passionate about creating scalable and efficient software systems.',
      skills: ['React', 'Node.js', 'Python', 'AI/ML'],
      Github: 'omshrikhande.netlify.app',
      email: 'omshrikhande73@gmail.com'
    },
    {
      id: 3,
      name: 'Atharva',
      role: 'Content & Marketing Specialist',
      image: atharvaImg,
      bio: 'Creative professional focused on brand storytelling and digital marketing. Expert in content strategy and user engagement.',
      skills: ['Content Creation', 'Digital Marketing', 'SEO', 'Branding'],
      linkedin: 'https://carbona1.github.io/personalbranding/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAOpJMZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAadq8gXdcOCQx1zS74N_CoKYtRVEgewCBcH0gQErzX5NrxJ9XETSg6E6MWQvXg_aem_8n7zWSrN1-JWd50Qc_rfpw',
      email: 'atharva.chavhan1@gmail.com'
    },
    // {
    //   id: 4,
    //   name: 'Harshal',
    //   role: 'Hardware Engineer',
    //   image: 'https://via.placeholder.com/300x300/dc3545/ffffff?text=HS',
    //   bio: 'Electronics engineer with expertise in IoT devices and PCB design. Brings hardware innovations to life.',
    //   skills: ['PCB Design', 'IoT', 'Embedded Systems', 'Prototyping'],
    //   linkedin: '#',
    //   email: 'harshal@eistatech.com'
    // },
    {
      id: 5,
      name: 'Arpit Mahajan',
      role: 'Data Scientist',
      image: arpitImg,
      bio: 'AI enthusiast specializing in machine learning and predictive analytics. Transforms data into actionable business insights.',
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'TensorFlow'],
      linkedin: 'https://github.com/Arpitmahajan123',
      email: 'arpitmahajan32@gmail.com'
    },
  
  ];

  return (
    <div className="team">
      <section className="team-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Meet Our Team</h1>
            <p className="hero-subtitle">Passionate innovators driving the future of automation</p>
          </div>
        </div>
      </section>

      <section className="team-section section">
        <div className="container">
          <div className="section-intro fade-in-up">
            <h2>Our Expert Team</h2>
            <p>A diverse group of talented professionals united by a shared passion for innovation and excellence in automation technology.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member-card fade-in-up">
                <div className="member-image">
                  <img src={member.image} alt={member.name} style={member.imgStyle || {}} />
                  <div className="member-overlay">
                    <div className="member-links">
                      <a href={member.linkedin} className="social-link" title="LinkedIn">
                        <span>💼</span>
                      </a>
                      <a href={`mailto:${member.email}`} className="social-link" title="Email">
                        <span>✉️</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-content">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="culture-section section">
        <div className="container">
          <h2 className="text-center">Our Culture</h2>
          <div className="culture-grid">
            <div className="culture-item fade-in-up">
              <div className="culture-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>We encourage creative thinking and bold ideas that push the boundaries of what's possible in automation.</p>
            </div>
            <div className="culture-item fade-in-up">
              <div className="culture-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Teamwork is at our core. We believe that the best solutions come from diverse perspectives working together.</p>
            </div>
            <div className="culture-item fade-in-up">
              <div className="culture-icon">📈</div>
              <h3>Growth Mindset</h3>
              <p>Continuous learning and professional development are essential to our success and innovation.</p>
            </div>
            <div className="culture-item fade-in-up">
              <div className="culture-icon">🎯</div>
              <h3>Impact Driven</h3>
              <p>Every project we undertake aims to create meaningful, lasting positive impact for our clients and society.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="join-us section">
        <div className="container text-center">
          <h2>Join Our Team</h2>
          <p>Are you passionate about automation and innovation? We'd love to hear from you.</p>
          <button className="btn btn-primary">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default Team;