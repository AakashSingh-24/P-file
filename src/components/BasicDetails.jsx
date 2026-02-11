function BasicDetails() {
  const details = {
    name: "Rahul Sharma",
    age: "28 years",
    height: "5'10\"",
    city: "Mumbai, Maharashtra"
  };

  const labels = {
    name: "Name (नाम)",
    age: "Age (उम्र)",
    height: "Height (ऊंचाई)",
    city: "City (शहर)"
  };

  return (
    <div className="card">
      <h2>Basic Details (मूल विवरण)</h2>
      <div className="basic-details-grid">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="detail-item">
            <label>{labels[key]}</label>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicDetails;
