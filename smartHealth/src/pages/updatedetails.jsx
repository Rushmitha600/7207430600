import React, { useState } from 'react';
import './UpdateDetails.css';

const UpdateDetails = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1985-05-15',
    gender: 'Male'
  });

  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: 'O+',
    height: '175',
    weight: '70',
    allergies: 'Peanuts, Penicillin',
    conditions: 'Hypertension',
    medications: 'Atorvastatin 20mg'
  });

  const [insuranceInfo, setInsuranceInfo] = useState({
    provider: 'HealthCare Plus',
    policyNumber: 'HCP123456789',
    groupNumber: 'GRP987654',
    effectiveDate: '2024-01-01'
  });

  const handlePersonalChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleMedicalChange = (e) => {
    setMedicalInfo({
      ...medicalInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleInsuranceChange = (e) => {
    setInsuranceInfo({
      ...insuranceInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (section) => {
    alert(`${section} information updated successfully!`);
  };

  return (
    <div className="update-details">
      <div className="details-header">
        <h1>Update Your Details</h1>
        <p>Keep your personal and medical information up to date</p>
      </div>

      <div className="details-container">
        <div className="details-tabs">
          <button 
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <i className="fas fa-user"></i>
            Personal Info
          </button>
          <button 
            className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
            onClick={() => setActiveTab('medical')}
          >
            <i className="fas fa-heartbeat"></i>
            Medical Info
          </button>
          <button 
            className={`tab ${activeTab === 'insurance' ? 'active' : ''}`}
            onClick={() => setActiveTab('insurance')}
          >
            <i className="fas fa-shield-alt"></i>
            Insurance
          </button>
        </div>

        <div className="details-content">
          {activeTab === 'personal' && (
            <div className="form-section">
              <h2>Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handlePersonalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handlePersonalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handlePersonalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handlePersonalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={personalInfo.dateOfBirth}
                    onChange={handlePersonalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={personalInfo.gender}
                    onChange={handlePersonalChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
              <button 
                className="save-btn"
                onClick={() => handleSave('Personal')}
              >
                Save Personal Information
              </button>
            </div>
          )}

          {activeTab === 'medical' && (
            <div className="form-section">
              <h2>Medical Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Blood Type</label>
                  <select
                    name="bloodType"
                    value={medicalInfo.bloodType}
                    onChange={handleMedicalChange}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    value={medicalInfo.height}
                    onChange={handleMedicalChange}
                  />
                </div>
                <div className="form-group">
                  <label>Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={medicalInfo.weight}
                    onChange={handleMedicalChange}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Allergies</label>
                  <textarea
                    name="allergies"
                    value={medicalInfo.allergies}
                    onChange={handleMedicalChange}
                    placeholder="List any allergies..."
                    rows="3"
                  />
                </div>
                <div className="form-group full-width">
                  <label>Medical Conditions</label>
                  <textarea
                    name="conditions"
                    value={medicalInfo.conditions}
                    onChange={handleMedicalChange}
                    placeholder="List any medical conditions..."
                    rows="3"
                  />
                </div>
                <div className="form-group full-width">
                  <label>Current Medications</label>
                  <textarea
                    name="medications"
                    value={medicalInfo.medications}
                    onChange={handleMedicalChange}
                    placeholder="List current medications..."
                    rows="3"
                  />
                </div>
              </div>
              <button 
                className="save-btn"
                onClick={() => handleSave('Medical')}
              >
                Save Medical Information
              </button>
            </div>
          )}

          {activeTab === 'insurance' && (
            <div className="form-section">
              <h2>Insurance Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Insurance Provider</label>
                  <input
                    type="text"
                    name="provider"
                    value={insuranceInfo.provider}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="form-group">
                  <label>Policy Number</label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={insuranceInfo.policyNumber}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="form-group">
                  <label>Group Number</label>
                  <input
                    type="text"
                    name="groupNumber"
                    value={insuranceInfo.groupNumber}
                    onChange={handleInsuranceChange}
                  />
                </div>
                <div className="form-group">
                  <label>Effective Date</label>
                  <input
                    type="date"
                    name="effectiveDate"
                    value={insuranceInfo.effectiveDate}
                    onChange={handleInsuranceChange}
                  />
                </div>
              </div>
              <div className="insurance-card">
                <div className="card-header">
                  <i className="fas fa-id-card"></i>
                  <h3>Insurance Card</h3>
                </div>
                <div className="card-content">
                  <p><strong>Provider:</strong> {insuranceInfo.provider}</p>
                  <p><strong>Policy #:</strong> {insuranceInfo.policyNumber}</p>
                  <p><strong>Group #:</strong> {insuranceInfo.groupNumber}</p>
                  <button className="upload-btn">
                    <i className="fas fa-upload"></i>
                    Upload Insurance Card
                  </button>
                </div>
              </div>
              <button 
                className="save-btn"
                onClick={() => handleSave('Insurance')}
              >
                Save Insurance Information
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateDetails;