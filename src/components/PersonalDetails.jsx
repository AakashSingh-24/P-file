import { useContext } from 'react';
import { LanguageContext } from '../App';

function PersonalDetails() {
  const { labels, data } = useContext(LanguageContext);
  
  return (
    <div style={{ padding: '30px' }}>
      <div className="info-grid">
        {Object.entries(data.personalDetails).map(([key, value]) => (
          <div key={key} className="info-item">
            <strong>{labels.personalDetailsLabels[key]}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalDetails;
