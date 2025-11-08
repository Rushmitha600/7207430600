import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './emergencycare.css';

const EmergencyCare = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const emergencyContacts = [
    { name: 'Emergency Ambulance', number: '108', icon: 'fas fa-ambulance' },
    { name: 'Poison Control', number: '1-800-222-1222', icon: 'fas fa-skull-crossbones' },
    { name: 'Mental Health Crisis', number: '988', icon: 'fas fa-head-side-virus' },
    { name: 'Suicide Prevention', number: '1-800-273-8255', icon: 'fas fa-life-ring' }
  ];

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    alert('Emergency assistance has been notified! Help is on the way.');
    // Reset form
    setEmergencyType('');
    setLocation('');
    setDescription('');
  };

  const handleCall = (number) => {
    if (window.confirm(`Call ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  return (
    <div className="emergency-care">
        <Navbar />
      <div className="emergency-header">
        <h1>Emergency Care</h1>
        <p className="emergency-alert">Immediate medical assistance for urgent situations</p>
      </div>

      <div className="emergency-container">
        <div className="emergency-alert-card">
          <div className="alert-icon">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div className="alert-content">
            <h2>Medical Emergency Alert</h2>
            <p>If this is a life-threatening emergency, call 108 immediately</p>
            <button 
              className="emergency-call-btn"
              onClick={() => handleCall('108')}
            >
              <i className="fas fa-phone"></i>
              CALL 108 NOW
            </button>
          </div>
        </div>

        <div className="emergency-grid">
          <div className="emergency-form-section">
            <h3>Request Emergency Assistance</h3>
            <form onSubmit={handleEmergencySubmit} className="emergency-form">
              <div className="form-group">
                <label>Type of Emergency</label>
                <select 
                  value={emergencyType} 
                  onChange={(e) => setEmergencyType(e.target.value)}
                  required
                >
                  <option value="">Select emergency type</option>
                  <option value="heart">Heart Attack/Stroke</option>
                  <option value="breathing">Breathing Difficulty</option>
                  <option value="accident">Accident/Injury</option>
                  <option value="allergic">Severe Allergic Reaction</option>
                  <option value="other">Other Medical Emergency</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your current location"
                  required
                />
              </div>

              <div className="form-group">
                <label>Emergency Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the emergency situation..."
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="emergency-submit-btn">
                <i className="fas fa-bell"></i>
                SEND EMERGENCY ALERT
              </button>
            </form>
          </div>

          <div className="emergency-contacts">
            <h3>Emergency Contacts</h3>
            <div className="contacts-list">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">
                    <i className={contact.icon}></i>
                  </div>
                  <div className="contact-info">
                    <h4>{contact.name}</h4>
                    <p>{contact.number}</p>
                  </div>
                  <button 
                    className="call-btn"
                    onClick={() => handleCall(contact.number)}
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="emergency-guide">
          <h3>Emergency First Aid Guide</h3>
          <div className="guide-grid">
            <div className="guide-card">
              <i className="fas fa-heartbeat"></i>
              <h4>CPR Steps</h4>
              <ol>
                <li>Check responsiveness</li>
                <li>Call 108</li>
                <li>30 chest compressions</li>
                <li>2 rescue breaths</li>
              </ol>
            </div>
            <div className="guide-card">
              <i className="fas fa-burn"></i>
              <h4>Burns</h4>
              <ul>
                <li>Cool with running water</li>
                <li>Cover with sterile dressing</li>
                <li>Don't apply ice</li>
              </ul>
            </div>
            <div className="guide-card">
              <i className="fas fa-band-aid"></i>
              <h4>Bleeding</h4>
              <ul>
                <li>Apply direct pressure</li>
                <li>Elevate the injury</li>
                <li>Use clean cloth</li>
              </ul>
            </div>
            <div className="guide-card">
              <i className="fas fa-allergies"></i>
              <h4>Allergic Reaction</h4>
              <ul>
                <li>Use epinephrine if available</li>
                <li>Call 108 immediately</li>
                <li>Stay with the person</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare;