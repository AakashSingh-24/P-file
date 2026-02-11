import { useState } from 'react';
import Header from './components/Header';
import BasicDetails from './components/BasicDetails';
import PersonalDetails from './components/PersonalDetails';
import Photos from './components/Photos';
import FamilyDetails from './components/FamilyDetails';
import Education from './components/Education';
import Profession from './components/Profession';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'personal', label: 'Personal Details (व्यक्तिगत विवरण)', component: PersonalDetails },
    { id: 'photos', label: 'Photos (फोटो)', component: Photos },
    { id: 'family', label: 'Family Details (पारिवारिक विवरण)', component: FamilyDetails },
    { id: 'education', label: 'Education (शिक्षा)', component: Education },
    { id: 'profession', label: 'Profession (व्यवसाय)', component: Profession }
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component;

  return (
    <div className="app">
      <Header />
      <div className="container">
        <BasicDetails />
        
        <div className="navigation-buttons">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {ActiveComponent && (
          <div className="content-section fade-in">
            <ActiveComponent />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
