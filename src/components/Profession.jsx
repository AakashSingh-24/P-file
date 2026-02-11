import { useContext } from 'react';
import { LanguageContext } from '../App';

function Profession() {
  const { labels, data } = useContext(LanguageContext);
  
  return (
    <div style={{ padding: '30px' }}>
      <div className="info-grid" style={{ marginBottom: '30px' }}>
        {Object.entries(data.professionalDetails).map(([key, value]) => (
          <div key={key} className="info-item">
            <strong>{labels.professionalDetailsLabels[key]}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px' }}>{labels.sectionLabels.workExperience}</h3>
      <div className="timeline">
        {data.professionalHistory.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="year">{job.year}</div>
            <h3>{job.position}</h3>
            <p><strong>{job.company}</strong></p>
            <p>{job.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profession;
