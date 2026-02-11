import { useState, createContext, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from './components/Header';
import BasicDetails from './components/BasicDetails';
import PersonalDetails from './components/PersonalDetails';
import Photos from './components/Photos';
import FamilyDetails from './components/FamilyDetails';
import Education from './components/Education';
import Profession from './components/Profession';
import { biodataData, labels } from './data/biodataData';
import './App.css';

export const LanguageContext = createContext();

function App() {
  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  const currentLabels = labels[language];
  const currentData = biodataData[language];

  const sections = [
    { id: 'personal', label: currentLabels.sectionLabels.personal, component: PersonalDetails },
    { id: 'photos', label: currentLabels.sectionLabels.photos, component: Photos },
    { id: 'family', label: currentLabels.sectionLabels.family, component: FamilyDetails },
    { id: 'education', label: currentLabels.sectionLabels.education, component: Education },
    { id: 'profession', label: currentLabels.sectionLabels.profession, component: Profession }
  ];

  return (
    <LanguageContext.Provider value={{ language, labels: currentLabels, data: currentData }}>
      <div className="app">
        <Header />
        <div className="language-toggle-container">
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
        <div className="container">
          <BasicDetails />
          
          <div className="accordion-container">
            {sections.map((section) => {
              const Component = section.component;
              return (
                <Accordion
                  key={section.id}
                  expanded={expanded === section.id}
                  onChange={handleChange(section.id)}
                  sx={{
                    marginBottom: '15px',
                    borderRadius: '15px !important',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      margin: '0 0 15px 0'
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#667eea', fontSize: '2rem' }} />}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      borderRadius: '15px',
                      minHeight: '70px',
                      '&.Mui-expanded': {
                        minHeight: '70px',
                        borderRadius: '15px 15px 0 0'
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '15px 0'
                      }
                    }}
                  >
                    <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: '700' }}>
                      {section.label}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: '0',
                      background: 'white'
                    }}
                  >
                    <Component />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
