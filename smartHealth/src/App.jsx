import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your pages
import Home from './pages/Home';
import Services from './pages/services';
import Doctors from './pages/doctors';
import Support from './pages/support';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

// Import all service pages
import BookAppointment from './pages/bookappointment';
import HealthChallenges from './pages/healthchallenges';
import MedicalHistory from './pages/medicalhistory';
import EmergencyCare from './pages/emergencycare';
import UpdateDetails from './pages/updatedetails';
import HealthAssistance from './pages/healthassistance';
import EPrescription from './pages/e-prescription';
import PharmacyServices from './pages/PharmacyServices';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Service Pages */}
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/health-challenges" element={<HealthChallenges />} />
          <Route path="/medical-history" element={<MedicalHistory />} />
          <Route path="/emergency-care" element={<EmergencyCare />} />
          <Route path="/update-details" element={<UpdateDetails />} />
          <Route path="/health-assistant" element={<HealthAssistance />} />
          <Route path="/e-prescription" element={<EPrescription />} />
          <Route path="/pharmacy-services" element={<PharmacyServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;