import { useState } from 'react';

function FamilyDetails() {
  const [activeTab, setActiveTab] = useState('family');

  const familyInfo = {
    fatherName: "Mr. Rajesh Sharma",
    fatherOccupation: "Business Owner",
    motherName: "Mrs. Sunita Sharma",
    motherOccupation: "Homemaker",
    siblings: "1 Brother (Younger, Student)",
    familyType: "Nuclear Family",
    familyStatus: "Upper Middle Class"
  };

  const familyLabels = {
    fatherName: "Father Name (पिता का नाम)",
    fatherOccupation: "Father Occupation (पिता का व्यवसाय)",
    motherName: "Mother Name (माता का नाम)",
    motherOccupation: "Mother Occupation (माता का व्यवसाय)",
    siblings: "Siblings (भाई-बहन)",
    familyType: "Family Type (परिवार का प्रकार)",
    familyStatus: "Family Status (पारिवारिक स्थिति)"
  };

  const mamaPakshInfo = {
    maternalGrandfather: "Late Mr. Vishwanath Patil",
    maternalGrandmother: "Mrs. Laxmi Patil",
    maternalUncle: "Mr. Suresh Patil (Business)",
    nativePlace: "Pune, Maharashtra",
    familyBackground: "Respectable family with strong values"
  };

  const mamaLabels = {
    maternalGrandfather: "Maternal Grandfather (नाना)",
    maternalGrandmother: "Maternal Grandmother (नानी)",
    maternalUncle: "Maternal Uncle (मामा)",
    nativePlace: "Native Place (मूल निवास)",
    familyBackground: "Family Background (पारिवारिक पृष्ठभूमि)"
  };

  return (
    <div className="card">
      <h2>Family Details (पारिवारिक विवरण)</h2>
      
      <div className="sub-navigation">
        <button
          className={`sub-btn ${activeTab === 'family' ? 'active' : ''}`}
          onClick={() => setActiveTab('family')}
        >
          Family (परिवार)
        </button>
        <button
          className={`sub-btn ${activeTab === 'mama' ? 'active' : ''}`}
          onClick={() => setActiveTab('mama')}
        >
          Mama Paksh (मामा पक्ष)
        </button>
      </div>

      {activeTab === 'family' && (
        <div className="fade-in">
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>Family Information (पारिवारिक जानकारी)</h3>
          <div className="info-grid">
            {Object.entries(familyInfo).map(([key, value]) => (
              <div key={key} className="info-item">
                <strong>{familyLabels[key]}:</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'mama' && (
        <div className="fade-in">
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>Maternal Side (मामा पक्ष)</h3>
          <div className="info-grid">
            {Object.entries(mamaPakshInfo).map(([key, value]) => (
              <div key={key} className="info-item">
                <strong>{mamaLabels[key]}:</strong>
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
