import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './bookappointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Mike Chen', specialty: 'Dermatology' },
    { id: 3, name: 'Dr. Emily Davis', specialty: 'Pediatrics' },
    { id: 4, name: 'Dr. Robert Brown', specialty: 'Orthopedics' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="book-appointment">
         <Navbar />
      <div className="appointment-header">
        <h1>Book an Appointment</h1>
        <p>Schedule your consultation with our expert doctors</p>
      </div>

      <div className="appointment-container">
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Select Doctor</label>
              <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                <option value="">Choose a doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Reason for Visit</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Briefly describe your symptoms or reason for appointment"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Book Appointment</button>
        </form>

        <div className="appointment-info">
          <h3>Why Book With Us?</h3>
          <div className="info-card">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Quick Scheduling</h4>
              <p>Get appointments within 24 hours</p>
            </div>
          </div>
          <div className="info-card">
            <i className="fas fa-user-md"></i>
            <div>
              <h4>Expert Doctors</h4>
              <p>Board-certified specialists</p>
            </div>
          </div>
          <div className="info-card">
            <i className="fas fa-shield-alt"></i>
            <div>
              <h4>Secure & Private</h4>
              <p>Your data is protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;