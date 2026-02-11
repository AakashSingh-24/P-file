function PersonalDetails() {
  const personalInfo = {
    dateOfBirth: "15th January 1996",
    birthTime: "10:30 AM",
    birthPlace: "Mumbai",
    religion: "Hindu",
    caste: "Brahmin",
    // subCaste: "Deshastha",
    complexion: "Fair",
    bloodGroup: "O+",
    // maritalStatus: "Unmarried",
    // hobbies: "Reading, Traveling, Photography"
  };

  const labels = {
    dateOfBirth: "Date Of Birth (जन्म तिथि)",
    birthTime: "Birth Time (जन्म समय)",
    birthPlace: "Birth Place (जन्म स्थान)",
    religion: "Religion (धर्म)",
    caste: "Caste (जाति)",
    // subCaste: "Sub Caste (उप जाति)",
    complexion: "Complexion (रंग)",
    bloodGroup: "Blood Group (रक्त समूह)",
    // maritalStatus: "Marital Status (वैवाहिक स्थिति)",
    // hobbies: "Hobbies (शौक)"
  };

  return (
    <div className="card">
      <h2>Personal Details (व्यक्तिगत विवरण)</h2>
      <div className="info-grid">
        {Object.entries(personalInfo).map(([key, value]) => (
          <div key={key} className="info-item">
            <strong>{labels[key]}:</strong>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalDetails;
