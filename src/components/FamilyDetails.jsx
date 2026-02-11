import { useState, useContext } from 'react';
import { LanguageContext } from '../App';

function FamilyDetails() {
  const [activeTab, setActiveTab] = useState('family');
  const { labels, data } = useContext(LanguageContext);

  return (
    <div style={{ padding: '30px' }}>
      <div className="sub-navigation">
        <button
          className={`sub-btn ${activeTab === 'family' ? 'active' : ''}`}
          onClick={() => setActiveTab('family')}
        >
          {labels.sectionLabels.familyTab}
        </button>
        <button
          className={`sub-btn ${activeTab === 'mama' ? 'active' : ''}`}
          onClick={() => setActiveTab('mama')}
        >
          {labels.sectionLabels.mamaPakshTab}
        </button>
      </div>

      {activeTab === 'family' && (
        <div className="fade-in">
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>{labels.sectionLabels.familyInfo}</h3>
          <div className="info-grid">
            {Object.entries(data.familyDetails).map(([key, value]) => (
              <div key={key} className="info-item">
                <strong>{labels.familyDetailsLabels[key]}:</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'mama' && (
        <div className="fade-in">
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>{labels.sectionLabels.mamaPaksh}</h3>
          <div className="info-grid">
            {Object.entries(data.mamaPakshDetails).map(([key, value]) => (
              <div key={key} className="info-item">
                <strong>{labels.mamaPakshLabels[key]}:</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FamilyDetails;
