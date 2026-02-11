import { useContext } from 'react';
import { LanguageContext } from '../App';
import { biodataData } from '../data/biodataData';

function Photos() {
  const { labels } = useContext(LanguageContext);
  
  return (
    <div style={{ padding: '30px' }}>
      <div className="photos-grid">
        {biodataData.photos.map(photo => (
          <div key={photo.id} className="photo-item">
            {photo.icon}
          </div>
        ))}
      </div>
      <p style={{ marginTop: '20px', color: '#666', textAlign: 'center' }}>
        {labels.sectionLabels.photoPlaceholder}
      </p>
    </div>
  );
}

export default Photos;
