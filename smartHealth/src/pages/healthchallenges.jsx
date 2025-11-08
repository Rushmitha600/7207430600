import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './healthchallenges.css';

const HealthChallenges = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      title: 'Daily Steps',
      icon: 'fas fa-walking',
      goal: '10,000 steps',
      description: 'Track your daily steps and stay active',
      progress: 65,
      tips: ['Take the stairs instead of elevator', 'Walk during phone calls', 'Park farther away']
    },
    {
      id: 2,
      title: 'Water Intake',
      icon: 'fas fa-tint',
      goal: '8 glasses',
      description: 'Stay hydrated throughout the day',
      progress: 80,
      tips: ['Carry a water bottle', 'Set hourly reminders', 'Add lemon for flavor']
    },
    {
      id: 3,
      title: 'Sleep Quality',
      icon: 'fas fa-bed',
      goal: '8 hours',
      description: 'Improve your sleep patterns',
      progress: 45,
      tips: ['Avoid screens before bed', 'Keep consistent schedule', 'Create dark environment']
    },
    {
      id: 4,
      title: 'Mindfulness',
      icon: 'fas fa-brain',
      goal: '10 minutes',
      description: 'Practice daily meditation',
      progress: 30,
      tips: ['Start with 5 minutes', 'Use guided meditation', 'Focus on breathing']
    }
  ];

  return (
    <div className="health-challenges">
        <Navbar />
      <div className="challenges-header">
        <h1>Health Challenges</h1>
        <p>Track and improve your daily health habits</p>
      </div>

      <div className="challenges-grid">
        {challenges.map(challenge => (
          <div 
            key={challenge.id}
            className="challenge-card"
            onClick={() => setSelectedChallenge(challenge)}
          >
            <div className="challenge-icon">
              <i className={challenge.icon}></i>
            </div>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{challenge.progress}%</span>
            </div>
            <div className="goal">Goal: {challenge.goal}</div>
          </div>
        ))}
      </div>

      {selectedChallenge && (
        <div className="challenge-modal">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setSelectedChallenge(null)}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <i className={selectedChallenge.icon}></i>
              <h2>{selectedChallenge.title}</h2>
            </div>
            
            <div className="progress-section">
              <h3>Your Progress</h3>
              <div className="progress-bar large">
                <div 
                  className="progress-fill"
                  style={{ width: `${selectedChallenge.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{selectedChallenge.progress}% Complete</span>
            </div>

            <div className="tips-section">
              <h3>Expert Tips</h3>
              <ul>
                {selectedChallenge.tips.map((tip, index) => (
                  <li key={index}>
                    <i className="fas fa-lightbulb"></i>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="action-buttons">
              <button className="btn-primary">Log Activity</button>
              <button className="btn-secondary">Set Reminder</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthChallenges;