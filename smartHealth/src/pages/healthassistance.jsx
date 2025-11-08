import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './healthassistance.css';

const HealthAssistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your Health Assistant. How can I help you today?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    fatigue: false,
    nausea: false
  });

  const commonQuestions = [
    "What are the symptoms of flu?",
    "How to lower blood pressure?",
    "Best exercises for back pain",
    "Healthy diet tips",
    "Stress management techniques"
  ];

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputText }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I understand your concern. Based on your symptoms, I recommend consulting a doctor for proper diagnosis.",
        "That's a common health question. Let me provide some general information, but remember to consult a healthcare professional for personalized advice.",
        "I can help with general health information. For specific medical concerns, please contact your healthcare provider.",
        "Thank you for sharing. Here are some general tips, but individual medical advice should come from a qualified doctor."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
    }, 1000);

    setInputText('');
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
  };

  const handleSymptomChange = (symptom) => {
    setSymptoms(prev => ({
      ...prev,
      [symptom]: !prev[symptom]
    }));
  };

  const analyzeSymptoms = () => {
    const selectedSymptoms = Object.keys(symptoms).filter(symptom => symptoms[symptom]);
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setMessages(prev => [...prev, 
      { type: 'user', text: `Symptoms: ${selectedSymptoms.join(', ')}` }
    ]);

    setTimeout(() => {
      setMessages(prev => [...prev, 
        { type: 'bot', text: `Based on the symptoms you've selected (${selectedSymptoms.join(', ')}), I recommend monitoring your condition and consulting a healthcare provider if symptoms persist or worsen. Remember, this is not a medical diagnosis.` }
      ]);
    }, 1000);
  };

  return (
    <div className="health-assistant">
        <Navbar />
      <div className="assistant-header">
        <h1>Health Assistant</h1>
        <p>AI-powered health support and guidance</p>
      </div>

      <div className="assistant-container">
        <div className="chat-section">
          <div className="chat-header">
            <div className="bot-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div className="bot-info">
              <h3>Health Assistant</h3>
              <span className="status">Online</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your health question..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>

          <div className="quick-questions">
            <h4>Quick Questions</h4>
            <div className="questions-grid">
              {commonQuestions.map((question, index) => (
                <button
                  key={index}
                  className="question-btn"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="tools-section">
          <div className="symptom-checker">
            <h3>Symptom Checker</h3>
            <p>Select your symptoms for general guidance</p>
            
            <div className="symptoms-list">
              {Object.keys(symptoms).map(symptom => (
                <label key={symptom} className="symptom-item">
                  <input
                    type="checkbox"
                    checked={symptoms[symptom]}
                    onChange={() => handleSymptomChange(symptom)}
                  />
                  <span className="checkmark"></span>
                  {symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                </label>
              ))}
            </div>
            
            <button className="analyze-btn" onClick={analyzeSymptoms}>
              Analyze Symptoms
            </button>
          </div>

          <div className="health-tools">
            <h3>Health Tools</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <i className="fas fa-calculator"></i>
                <h4>BMI Calculator</h4>
                <p>Calculate your Body Mass Index</p>
              </div>
              <div className="tool-card">
                <i className="fas fa-heart"></i>
                <h4>Heart Rate</h4>
                <p>Monitor your pulse</p>
              </div>
              <div className="tool-card">
                <i className="fas fa-bed"></i>
                <h4>Sleep Tracker</h4>
                <p>Track sleep patterns</p>
              </div>
              <div className="tool-card">
                <i className="fas fa-utensils"></i>
                <h4>Nutrition</h4>
                <p>Diet recommendations</p>
              </div>
            </div>
          </div>

          <div className="disclaimer">
            <i className="fas fa-exclamation-triangle"></i>
            <p><strong>Disclaimer:</strong> This assistant provides general health information only. It is not a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssistant;