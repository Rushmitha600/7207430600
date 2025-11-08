import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './medicalhistory.css';

const MedicalHistory = () => {
  const [activeTab, setActiveTab] = useState('records');

  const medicalRecords = [
    {
      id: 1,
      date: '2024-01-15',
      type: 'Consultation',
      doctor: 'Dr. Sarah Johnson',
      diagnosis: 'Regular checkup - All normal',
      prescription: 'Multivitamins'
    },
    {
      id: 2,
      date: '2023-11-20',
      type: 'Blood Test',
      doctor: 'Dr. Mike Chen',
      diagnosis: 'Cholesterol slightly elevated',
      prescription: 'Diet and exercise recommended'
    },
    {
      id: 3,
      date: '2023-08-10',
      type: 'Vaccination',
      doctor: 'Dr. Emily Davis',
      diagnosis: 'Flu shot administered',
      prescription: 'None'
    }
  ];

  const allergies = [
    { id: 1, name: 'Penicillin', severity: 'High', reaction: 'Rash' },
    { id: 2, name: 'Peanuts', severity: 'Critical', reaction: 'Anaphylaxis' }
  ];

  const medications = [
    { id: 1, name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily' },
    { id: 2, name: 'Multivitamin', dosage: '1 tablet', frequency: 'Once daily' }
  ];

  return (
    <div className="medical-history">
        <Navbar />
      <div className="history-header">
        <h1>Medical History</h1>
        <p>Your complete health records in one secure place</p>
      </div>

      <div className="history-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'records' ? 'active' : ''}`}
            onClick={() => setActiveTab('records')}
          >
            <i className="fas fa-file-medical"></i>
            Medical Records
          </button>
          <button 
            className={`tab ${activeTab === 'allergies' ? 'active' : ''}`}
            onClick={() => setActiveTab('allergies')}
          >
            <i className="fas fa-allergies"></i>
            Allergies
          </button>
          <button 
            className={`tab ${activeTab === 'medications' ? 'active' : ''}`}
            onClick={() => setActiveTab('medications')}
          >
            <i className="fas fa-pills"></i>
            Medications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'records' && (
            <div className="records-section">
              <div className="section-header">
                <h2>Medical Records</h2>
                <button className="add-btn">
                  <i className="fas fa-plus"></i>
                  Add Record
                </button>
              </div>
              
              <div className="records-list">
                {medicalRecords.map(record => (
                  <div key={record.id} className="record-card">
                    <div className="record-header">
                      <h3>{record.type}</h3>
                      <span className="record-date">{record.date}</span>
                    </div>
                    <div className="record-details">
                      <p><strong>Doctor:</strong> {record.doctor}</p>
                      <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                      <p><strong>Prescription:</strong> {record.prescription}</p>
                    </div>
                    <div className="record-actions">
                      <button className="action-btn view">
                        <i className="fas fa-eye"></i>
                        View
                      </button>
                      <button className="action-btn download">
                        <i className="fas fa-download"></i>
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'allergies' && (
            <div className="allergies-section">
              <div className="section-header">
                <h2>Allergies</h2>
                <button className="add-btn">
                  <i className="fas fa-plus"></i>
                  Add Allergy
                </button>
              </div>
              
              <div className="allergies-list">
                {allergies.map(allergy => (
                  <div key={allergy.id} className="allergy-card">
                    <div className="allergy-info">
                      <h3>{allergy.name}</h3>
                      <span className={`severity ${allergy.severity.toLowerCase()}`}>
                        {allergy.severity}
                      </span>
                    </div>
                    <p><strong>Reaction:</strong> {allergy.reaction}</p>
                    <div className="allergy-actions">
                      <button className="action-btn edit">
                        <i className="fas fa-edit"></i>
                        Edit
                      </button>
                      <button className="action-btn delete">
                        <i className="fas fa-trash"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'medications' && (
            <div className="medications-section">
              <div className="section-header">
                <h2>Current Medications</h2>
                <button className="add-btn">
                  <i className="fas fa-plus"></i>
                  Add Medication
                </button>
              </div>
              
              <div className="medications-list">
                {medications.map(med => (
                  <div key={med.id} className="medication-card">
                    <div className="medication-info">
                      <h3>{med.name}</h3>
                      <span className="dosage">{med.dosage}</span>
                    </div>
                    <p><strong>Frequency:</strong> {med.frequency}</p>
                    <div className="medication-actions">
                      <button className="action-btn refill">
                        <i className="fas fa-sync"></i>
                        Request Refill
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;