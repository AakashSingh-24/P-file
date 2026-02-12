import { useState } from 'react';
import { photos } from '../data/photos';
import CloseIcon from '@mui/icons-material/Close';

function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  return (
    <>
      <div style={{ padding: '30px' }}>
        <div className="photos-grid">
          {photos.map(photo => (
            <div key={photo.id} className="photo-item" onClick={() => setSelectedPhoto(photo.src)}>
              <img src={photo.src} alt={`Photo ${photo.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px', cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setSelectedPhoto(null)}>
              <CloseIcon />
            </button>
            <img src={selectedPhoto} alt="Full size" />
          </div>
        </div>
      )}
    </>
  );
}

export default Photos;
