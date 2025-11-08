import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './e-prescription.css';

const EPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      medication: 'Atorvastatin 20mg',
      dosage: '1 tablet daily',
      quantity: 30,
      refills: 3,
      prescribedBy: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      medication: 'Amoxicillin 500mg',
      dosage: '1 capsule every 8 hours',
      quantity: 21,
      refills: 0,
      prescribedBy: 'Dr. Mike Chen',
      date: '2024-01-10',
      status: 'Completed'
    }
  ]);

  const [showNewPrescription, setShowNewPrescription] = useState(false);
  const [newPrescription, setNewPrescription] = useState({
    medication: '',
    dosage: '',
    quantity: '',
    refills: '',
    instructions: ''
  });

  const handleNewPrescriptionChange = (e) => {
    setNewPrescription({
      ...newPrescription,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitPrescription = (e) => {
    e.preventDefault();
    const prescription = {
      id: prescriptions.length + 1,
      ...newPrescription,
      prescribedBy: 'Dr. You',
      date: new Date().toISOString().split('T')[0],
      status: 'Active'
    };
    setPrescriptions([...prescriptions, prescription]);
    setShowNewPrescription(false);
    setNewPrescription({
      medication: '',
      dosage: '',
      quantity: '',
      refills: '',
      instructions: ''
    });
    alert('Prescription added successfully!');
  };

  const handleRefillRequest = (id) => {
    setPrescriptions(prescriptions.map(prescription => 
      prescription.id === id 
        ? { ...prescription, status: 'Refill Requested' }
        : prescription
    ));
    alert('Refill request submitted!');
  };

  return (
    <div className="e-prescription">
        <Navbar />
      <div className="prescription-header">
        <h1>E-Prescription</h1>
        <p>Manage and refill your prescriptions digitally</p>
      </div>

      <div className="prescription-container">
        <div className="prescription-actions">
          <button 
            className="new-prescription-btn"
            onClick={() => setShowNewPrescription(true)}
          >
            <i className="fas fa-plus"></i>
            New Prescription
          </button>
          <button className="refill-all-btn">
            <i className="fas fa-sync"></i>
            Request All Refills
          </button>
        </div>

        <div className="prescriptions-list">
          <h2>Your Prescriptions</h2>
          {prescriptions.map(prescription => (
            <div key={prescription.id} className="prescription-card">
              <div className="prescription-header">
                <div className="medication-info">
                  <h3>{prescription.medication}</h3>
                  <span className={`status ${prescription.status.toLowerCase()}`}>
                    {prescription.status}
                  </span>
                </div>
                <div className="prescription-meta">
                  <span>Prescribed by: {prescription.prescribedBy}</span>
                  <span>Date: {prescription.date}</span>
                </div>
              </div>
              
              <div className="prescription-details">
                <div className="detail">
                  <strong>Dosage:</strong> {prescription.dosage}
                </div>
                <div className="detail">
                  <strong>Quantity:</strong> {prescription.quantity}
                </div>
                <div className="detail">
                  <strong>Refills Left:</strong> {prescription.refills}
                </div>
              </div>

              <div className="prescription-actions">
                <button className="action-btn view">
                  <i className="fas fa-eye"></i>
                  View Details
                </button>
                <button className="action-btn share">
                  <i className="fas fa-share"></i>
                  Share
                </button>
                {prescription.refills > 0 && prescription.status === 'Active' && (
                  <button 
                    className="action-btn refill"
                    onClick={() => handleRefillRequest(prescription.id)}
                  >
                    <i className="fas fa-sync"></i>
                    Request Refill
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showNewPrescription && (
          <div className="new-prescription-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h2>New Prescription</h2>
                <button 
                  className="close-btn"
                  onClick={() => setShowNewPrescription(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleSubmitPrescription} className="prescription-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Medication Name</label>
                    <input
                      type="text"
                      name="medication"
                      value={newPrescription.medication}
                      onChange={handleNewPrescriptionChange}
                      placeholder="Enter medication name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Dosage</label>
                    <input
                      type="text"
                      name="dosage"
                      value={newPrescription.dosage}
                      onChange={handleNewPrescriptionChange}
                      placeholder="e.g., 1 tablet daily"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={newPrescription.quantity}
                      onChange={handleNewPrescriptionChange}
                      placeholder="Number of units"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Refills</label>
                    <input
                      type="number"
                      name="refills"
                      value={newPrescription.refills}
                      onChange={handleNewPrescriptionChange}
                      placeholder="Number of refills"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Special Instructions</label>
                  <textarea
                    name="instructions"
                    value={newPrescription.instructions}
                    onChange={handleNewPrescriptionChange}
                    placeholder="Any special instructions for the patient..."
                    rows="4"
                  />
                </div>

                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowNewPrescription(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Save Prescription
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="prescription-features">
          <h3>E-Prescription Benefits</h3>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-paper-plane"></i>
              <h4>Digital Delivery</h4>
              <p>Prescriptions sent directly to pharmacy</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h4>Quick Refills</h4>
              <p>Request refills with one click</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Secure & Legal</h4>
              <p>Digitally signed and secure</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-history"></i>
              <h4>History Tracking</h4>
              <p>Complete prescription history</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPrescription;