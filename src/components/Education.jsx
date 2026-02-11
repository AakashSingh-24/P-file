function Education() {
  const educationHistory = [
    {
      degree: "Master of Business Administration (MBA)",
      year: "2018 - 2020",
      institution: "Indian Institute of Management, Bangalore",
      details: "Specialization in Finance and Marketing"
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      year: "2014 - 2018",
      institution: "University of Mumbai",
      details: "Computer Science Engineering - First Class with Distinction"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      year: "2012 - 2014",
      institution: "St. Xavier's College, Mumbai",
      details: "Science Stream - 92%"
    }
  ];

  return (
    <div className="card">
      <h2>Education (शिक्षा)</h2>
      <div className="timeline">
        {educationHistory.map((edu, index) => (
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
