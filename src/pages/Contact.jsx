import { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Us - Eistatech';
    emailjs.init('Im_R2DL7YUIGuXvfb');
  }, []);

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: 'development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.organization.trim()) {
      setError('Organization name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Contact number is required');
      return false;
    }
    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      setError('Please enter a valid phone number');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const templateParams = {
        to_email: 'eistatechofficial@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization,
        phone: formData.phone,
        service_type: formData.serviceType,
        message: formData.message,
      };

      await emailjs.send(
        'service_uosijpr',
        'template_wcwmnel',
        templateParams
      );

      setSubmitted(true);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        serviceType: 'development',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-hero parallax-bg">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">Let's discuss how we can help transform your business</p>
          </div>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info fade-in-up">
              <h2>Contact Information</h2>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:eistatechofficial@gmail.com">eistatechofficial@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p><a href="tel:+1234567890">+91 70589 72300</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Mate square<br />Nagpur, India 440022</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-in-up">
              <h2>Send us a Message</h2>
              
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {error && (
                <div className="error-message">
                  ✗ {error}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization Name *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Contact Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">Service Type *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="development">Development</option>
                    <option value="session">Session</option>
                    <option value="learning">Learning</option>
                    <option value="consultancy">Consultancy</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and requirements..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item fade-in-up">
              <h3>What is the typical response time?</h3>
              <p>We typically respond to inquiries within 24-48 business hours. For urgent matters, please mention it in your message.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h3>Do you provide free consultations?</h3>
              <p>Yes! We offer a free 30-minute consultation to discuss your project requirements and how we can help.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h3>What if I have questions before contacting?</h3>
              <p>Feel free to reach out via email or phone. Our team is always happy to discuss your needs and answer any questions.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h3>Can I schedule a call directly?</h3>
              <p>Absolutely! After submitting the form, our team will contact you to schedule a convenient time for a discussion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
