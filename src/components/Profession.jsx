function Profession() {
  const professionalHistory = [
    {
      position: "Senior Product Manager",
      year: "2022 - Present",
      company: "Tech Solutions Pvt. Ltd., Mumbai",
      details: "Leading product development team, managing multiple projects worth ₹50+ Crores"
    },
    {
      position: "Product Manager",
      year: "2020 - 2022",
      company: "Digital Innovations Inc., Bangalore",
      details: "Managed product lifecycle, coordinated with cross-functional teams"
    },
    {
      position: "Associate Product Manager",
      year: "2018 - 2020",
      company: "StartUp Hub, Pune",
      details: "Assisted in product strategy and market analysis"
    }
  ];

  const professionalDetails = {
    currentSalary: "₹18 LPA",
    workLocation: "Mumbai (Hybrid)",
    industry: "Information Technology"
  };

  const profLabels = {
    currentSalary: "Current Salary (वर्तमान वेतन)",
    workLocation: "Work Location (कार्य स्थान)",
    industry: "Industry (उद्योग)"
  };

  return (
    <div className="card">
      <h2>Profession (व्यवसाय)</h2>
      
      <div className="info-grid" style={{ marginBottom: '30px' }}>
        {Object.entries(professionalDetails).map(([key, value]) => (
          <div key={key} className="info-item">
            <strong>{profLabels[key]}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px' }}>Work Experience (कार्य अनुभव)</h3>
      <div className="timeline">
        {professionalHistory.map((job, index) => (
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
