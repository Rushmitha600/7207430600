import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './support.css';

const Support = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const faqCategories = [
    {
      name: 'General',
      questions: [
        {
          id: 1,
          question: 'How do I create an account?',
          answer: 'Click on the "Sign Up" button in the top right corner, fill in your details, and verify your email address to create your SmartHealth+ account.'
        },
        {
          id: 2,
          question: 'Is my medical information secure?',
          answer: 'Yes, we use enterprise-grade encryption and follow HIPAA compliance standards to ensure your medical data is completely secure and private.'
        },
        {
          id: 3,
          question: 'How do I book an appointment?',
          answer: 'Go to the "Services" page, select "Book Appointment", choose your preferred doctor, select an available time slot, and confirm your booking.'
        }
      ]
    },
    {
      name: 'Technical',
      questions: [
        {
          id: 4,
          question: 'The app is not loading properly',
          answer: 'Try clearing your browser cache, ensure you have a stable internet connection, or try using a different browser. If the issue persists, contact our technical support.'
        },
        {
          id: 5,
          question: 'How do I reset my password?',
          answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
        },
        {
          id: 6,
          question: 'Video call not working',
          answer: 'Ensure your camera and microphone permissions are enabled, check your internet connection, and try refreshing the page. Make sure you are using a supported browser.'
        }
      ]
    },
    {
      name: 'Billing',
      questions: [
        {
          id: 7,
          question: 'How do I pay for services?',
          answer: 'We accept all major credit cards, debit cards, and digital wallets. Payments are processed securely through our encrypted payment gateway.'
        },
        {
          id: 8,
          question: 'Can I get a refund?',
          answer: 'Refunds are processed on a case-by-case basis. Contact our support team with your booking details for assistance with refund requests.'
        },
        {
          id: 9,
          question: 'Do you accept insurance?',
          answer: 'We work with most major insurance providers. Please contact our billing department with your insurance details for verification.'
        }
      ]
    }
  ];

  const supportContacts = [
    {
      department: 'General Support',
      phone: '1-800-SMART-HLTH',
      email: 'support@smarthealth.com',
      hours: '24/7',
      icon: 'fas fa-headset'
    },
    {
      department: 'Technical Support',
      phone: '1-800-TECH-SUPT',
      email: 'tech@smarthealth.com',
      hours: 'Mon-Fri, 8AM-8PM EST',
      icon: 'fas fa-laptop-medical'
    },
    {
      department: 'Billing Department',
      phone: '1-800-BILLING',
      email: 'billing@smarthealth.com',
      hours: 'Mon-Fri, 9AM-5PM EST',
      icon: 'fas fa-file-invoice-dollar'
    },
    {
      department: 'Emergency',
      phone: '108',
      email: 'emergency@smarthealth.com',
      hours: '24/7',
      icon: 'fas fa-ambulance'
    }
  ];

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Our support team will get back to you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCall = (number) => {
    if (window.confirm(`Call ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  return (
    <div className="support-page">
        <Navbar />
      <div className="support-header">
        <h1>We're Here to Help</h1>
        <p>Get the support you need for your health journey</p>
      </div>

      <div className="support-container">
        <div className="support-tabs">
          <button 
            className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <i className="fas fa-question-circle"></i>
            FAQ
          </button>
          <button 
            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <i className="fas fa-envelope"></i>
            Contact Us
          </button>
          <button 
            className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            <i className="fas fa-book-medical"></i>
            Resources
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'faq' && (
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <p>Find quick answers to common questions</p>
              
              <div className="faq-categories">
                {faqCategories.map(category => (
                  <div key={category.name} className="faq-category">
                    <h3>{category.name}</h3>
                    <div className="questions-list">
                      {category.questions.map(q => (
                        <div 
                          key={q.id} 
                          className={`question-item ${selectedQuestion === q.id ? 'active' : ''}`}
                          onClick={() => setSelectedQuestion(selectedQuestion === q.id ? null : q.id)}
                        >
                          <div className="question-header">
                            <span>{q.question}</span>
                            <i className={`fas fa-chevron-${selectedQuestion === q.id ? 'up' : 'down'}`}></i>
                          </div>
                          {selectedQuestion === q.id && (
                            <div className="question-answer">
                              <p>{q.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="faq-help">
                <h3>Still need help?</h3>
                <p>Can't find the answer you're looking for? Contact our support team.</p>
                <button 
                  className="contact-help-btn"
                  onClick={() => setActiveTab('contact')}
                >
                  Contact Support
                </button>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="contact-section">
              <div className="contact-grid">
                <div className="contact-form-section">
                  <h2>Send us a Message</h2>
                  <form onSubmit={handleContactSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        placeholder="Brief subject of your message"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        placeholder="Describe your issue or question in detail..."
                        rows="6"
                        required
                      />
                    </div>

                    <button type="submit" className="submit-message-btn">
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="contact-info-section">
                  <h2>Contact Information</h2>
                  <div className="contact-cards">
                    {supportContacts.map((contact, index) => (
                      <div key={index} className="contact-card">
                        <div className="contact-icon">
                          <i className={contact.icon}></i>
                        </div>
                        <div className="contact-details">
                          <h4>{contact.department}</h4>
                          <div className="contact-methods">
                            <div className="contact-method">
                              <i className="fas fa-phone"></i>
                              <span 
                                className="clickable"
                                onClick={() => handleCall(contact.phone)}
                              >
                                {contact.phone}
                              </span>
                            </div>
                            <div className="contact-method">
                              <i className="fas fa-envelope"></i>
                              <span>{contact.email}</span>
                            </div>
                            <div className="contact-method">
                              <i className="fas fa-clock"></i>
                              <span>{contact.hours}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="resources-section">
              <h2>Helpful Resources</h2>
              <p>Additional materials to support your health journey</p>
              
              <div className="resources-grid">
                <div className="resource-card">
                  <i className="fas fa-file-pdf"></i>
                  <h3>User Guide</h3>
                  <p>Complete guide to using SmartHealth+ features</p>
                  <button className="download-btn">
                    <i className="fas fa-download"></i>
                    Download PDF
                  </button>
                </div>
                
                <div className="resource-card">
                  <i className="fas fa-video"></i>
                  <h3>Video Tutorials</h3>
                  <p>Step-by-step video guides for all features</p>
                  <button className="watch-btn">
                    <i className="fas fa-play"></i>
                    Watch Videos
                  </button>
                </div>
                
                <div className="resource-card">
                  <i className="fas fa-book"></i>
                  <h3>Health Articles</h3>
                  <p>Educational articles on various health topics</p>
                  <button className="read-btn">
                    <i className="fas fa-book-open"></i>
                    Read Articles
                  </button>
                </div>
                
                <div className="resource-card">
                  <i className="fas fa-comments"></i>
                  <h3>Community Forum</h3>
                  <p>Connect with other patients and share experiences</p>
                  <button className="join-btn">
                    <i className="fas fa-users"></i>
                    Join Community
                  </button>
                </div>
              </div>

              <div className="emergency-resources">
                <h3>Emergency Resources</h3>
                <div className="emergency-cards">
                  <div className="emergency-card">
                    <i className="fas fa-ambulance"></i>
                    <h4>Medical Emergency</h4>
                    <p>Call 911 for immediate medical assistance</p>
                    <button 
                      className="emergency-call-btn"
                      onClick={() => handleCall('911')}
                    >
                      Call 911
                    </button>
                  </div>
                  
                  <div className="emergency-card">
                    <i className="fas fa-life-ring"></i>
                    <h4>Crisis Support</h4>
                    <p>National Suicide Prevention Lifeline</p>
                    <button 
                      className="crisis-call-btn"
                      onClick={() => handleCall('988')}
                    >
                      Call 988
                    </button>
                  </div>
                  
                  <div className="emergency-card">
                    <i className="fas fa-poison"></i>
                    <h4>Poison Control</h4>
                    <p>24/7 poison emergency hotline</p>
                    <button 
                      className="poison-call-btn"
                      onClick={() => handleCall('1-800-222-1222')}
                    >
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer>© 2025 SmartHealth+. All rights reserved.</footer>
    </div>
  );
};

export default Support;