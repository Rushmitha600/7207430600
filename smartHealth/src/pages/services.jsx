import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/services.css';

const Services = () => {
  const servicesData = [
    {
      icon: 'fas fa-calendar-check',
      title: 'Book Appointment',
      description: 'Schedule consultations with top doctors quickly and easily.',
      link: '/book-appointment'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Health Challenges',
      description: 'Track and overcome daily health challenges with expert tips.',
      link: '/health-challenges'
    },
    {
      icon: 'fas fa-file-medical',
      title: 'Medical History',
      description: 'Access and manage your complete health records securely.',
      link: '/medical-history'
    },
    {
      icon: 'fas fa-ambulance',
      title: 'Emergency Care',
      description: 'Immediate medical assistance for urgent health situations.',
      link: '/emergency-care',
      emergency: true
    },
    {
      icon: 'fas fa-user-edit',
      title: 'Update Details',
      description: 'Keep your personal and health details up to date anytime.',
      link: '/update-details'
    },
    {
      icon: 'fas fa-robot',
      title: 'Health Assistant',
      description: 'Get AI-driven health support and smart reminders.',
      link: '/health-assistant'
    },
    {
      icon: 'fas fa-prescription-bottle-alt',
      title: 'E-Prescription',
      description: 'Generate, manage, and share prescriptions digitally.',
      link: '/e-prescription'
    },
    {
      icon: 'fas fa-pills',
      title: 'Pharmacy Services',
      description: 'Order medicines online and get doorstep delivery fast.',
      link: '/pharmacy-services'
    }
  ];

  return (
    <div className="services-page">
      <Navbar />

      <div className="page-header">Our Services</div>
      
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Link 
            key={index} 
            to={service.link}
            className={`service-card ${service.emergency ? 'emergency' : ''}`}
          >
            <span className="service-icon">
              <i className={service.icon}></i>
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.emergency && (
              <div className="emergency-contact">Call: 108</div>
            )}
          </Link>
        ))}
      </div>

      <footer>© 2025 SmartHealth+. All rights reserved.</footer>
    </div>
  );
};

export default Services;