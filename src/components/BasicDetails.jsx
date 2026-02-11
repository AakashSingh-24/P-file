import { useContext } from 'react';
import { LanguageContext } from '../App';

function BasicDetails() {
  const { labels, data } = useContext(LanguageContext);
  
  return (
    <div className="card">
      <h2>{labels.sectionLabels.basicDetails}</h2>
      <div className="basic-details-grid">
        {Object.entries(data.basicDetails).map(([key, value]) => (
          <div key={key} className="detail-item">
            <label>{labels.basicDetailsLabels[key]}</label>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicDetails;
