import { useContext } from 'react';
import { LanguageContext } from '../App';

function Education() {
  const { data } = useContext(LanguageContext);
  
  return (
    <div style={{ padding: '30px' }}>
      <div className="timeline">
        {data.educationHistory.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="year">{edu.year}</div>
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
