function Photos() {
  // Placeholder photos - will be replaced with real photos later
  const photos = [
    { id: 1, icon: "📷" },
    { id: 2, icon: "🖼️" },
    { id: 3, icon: "📸" },
    { id: 4, icon: "🎨" }
  ];

  return (
    <div className="card">
      <h2>Photos (फोटो)</h2>
      <div className="photos-grid">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            {photo.icon}
          </div>
        ))}
      </div>
      <p style={{ marginTop: '20px', color: '#666', textAlign: 'center' }}>
        Photo placeholders - Real photos will be added later (फोटो प्लेसहोल्डर - असली फोटो बाद में जोड़ी जाएंगी)
      </p>
    </div>
  );
}

export default Photos;
