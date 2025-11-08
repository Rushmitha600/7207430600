import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './doctors.css';

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = [
    'All',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Orthopedics',
    'Neurology',
    'Gynecology',
    'Dentistry',
    'Psychiatry'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.9,
      reviews: 284,
      image: '👩‍⚕️',
      education: 'MD, Harvard Medical School',
      languages: ['English', 'Spanish'],
      availability: 'Mon, Wed, Fri',
      fee: '$150'
    },
    {
      id: 2,
      name: 'Dr. Mike Chen',
      specialty: 'Dermatology',
      experience: '12 years',
      rating: 4.8,
      reviews: 196,
      image: '👨‍⚕️',
      education: 'MD, Stanford University',
      languages: ['English', 'Mandarin'],
      availability: 'Tue, Thu, Sat',
      fee: '$120'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      experience: '10 years',
      rating: 4.9,
      reviews: 312,
      image: '👩‍⚕️',
      education: 'MD, Johns Hopkins University',
      languages: ['English', 'French'],
      availability: 'Mon-Fri',
      fee: '$100'
    },
    {
      id: 4,
      name: 'Dr. Robert Brown',
      specialty: 'Orthopedics',
      experience: '18 years',
      rating: 4.7,
      reviews: 178,
      image: '👨‍⚕️',
      education: 'MD, Mayo Clinic',
      languages: ['English'],
      availability: 'Wed, Thu, Fri',
      fee: '$180'
    },
    {
      id: 5,
      name: 'Dr. Maria Garcia',
      specialty: 'Gynecology',
      experience: '14 years',
      rating: 4.8,
      reviews: 223,
      image: '👩‍⚕️',
      education: 'MD, UCLA',
      languages: ['English', 'Spanish'],
      availability: 'Mon, Tue, Thu',
      fee: '$130'
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialty: 'Neurology',
      experience: '20 years',
      rating: 4.9,
      reviews: 267,
      image: '👨‍⚕️',
      education: 'MD, Yale University',
      languages: ['English', 'German'],
      availability: 'Tue, Wed, Fri',
      fee: '$200'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const handleBookAppointment = (doctor) => {
    alert(`Booking appointment with ${doctor.name}`);
  };

  return (
    <div className="doctors-page">
        <Navbar />

      <div className="doctors-header">
        <h1>Find the Right Doctor</h1>
        <p>Connect with certified healthcare professionals specialized in your needs</p>
      </div>

      <div className="doctors-container">
        <div className="search-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="specialty-filters">
            <h3>Specialties</h3>
            <div className="specialty-buttons">
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  className={`specialty-btn ${selectedSpecialty === specialty.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setSelectedSpecialty(specialty.toLowerCase())}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="doctors-grid">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-image">
                {doctor.image}
                <div className="rating-badge">
                  <i className="fas fa-star"></i>
                  {doctor.rating}
                </div>
              </div>

              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <p className="experience">
                  <i className="fas fa-briefcase"></i>
                  {doctor.experience} experience
                </p>
                <p className="education">
                  <i className="fas fa-graduation-cap"></i>
                  {doctor.education}
                </p>
                <div className="languages">
                  <i className="fas fa-language"></i>
                  {doctor.languages.join(', ')}
                </div>
                <div className="availability">
                  <i className="fas fa-calendar"></i>
                  {doctor.availability}
                </div>
              </div>

              <div className="doctor-actions">
                <div className="fee">Consultation: {doctor.fee}</div>
                <div className="reviews">{doctor.reviews} reviews</div>
                <button 
                  className="book-btn"
                  onClick={() => handleBookAppointment(doctor)}
                >
                  <i className="fas fa-calendar-check"></i>
                  Book Appointment
                </button>
                <button 
                  className="view-profile-btn"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="no-doctors">
            <i className="fas fa-search"></i>
            <h3>No doctors found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {selectedDoctor && (
        <div className="doctor-modal">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setSelectedDoctor(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="doctor-avatar">
                {selectedDoctor.image}
              </div>
              <div className="doctor-details">
                <h2>{selectedDoctor.name}</h2>
                <p className="specialty">{selectedDoctor.specialty}</p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <span>{selectedDoctor.rating} ({selectedDoctor.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <h4>About Dr. {selectedDoctor.name.split(' ')[1]}</h4>
                <p>Board-certified {selectedDoctor.specialty.toLowerCase()} specialist with {selectedDoctor.experience} of experience. Committed to providing exceptional patient care with a focus on personalized treatment plans.</p>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <i className="fas fa-graduation-cap"></i>
                  <div>
                    <strong>Education</strong>
                    <p>{selectedDoctor.education}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fas fa-language"></i>
                  <div>
                    <strong>Languages</strong>
                    <p>{selectedDoctor.languages.join(', ')}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <div>
                    <strong>Availability</strong>
                    <p>{selectedDoctor.availability}</p>
                  </div>
                </div>
                <div className="detail-item">
                  <i className="fas fa-dollar-sign"></i>
                  <div>
                    <strong>Consultation Fee</strong>
                    <p>{selectedDoctor.fee}</p>
                  </div>
                </div>
              </div>

              <div className="action-buttons">
                <button className="primary-btn" onClick={() => handleBookAppointment(selectedDoctor)}>
                  <i className="fas fa-calendar-check"></i>
                  Book Appointment
                </button>
                <button className="secondary-btn">
                  <i className="fas fa-video"></i>
                  Video Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer>© 2025 SmartHealth+. All rights reserved.</footer>
    </div>
  );
};

export default Doctors;