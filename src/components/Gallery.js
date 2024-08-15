
import './Gallery.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api'; // Import the fetchImages function

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const fetchedImages = await fetchImages();
        setImages(fetchedImages);
      } catch (err) {
        setError(err.message);
      }
    };

    getImages();
  }, []);

  return (
    <div className="gallery">
      {error && <p>{error}</p>}
      {images.length > 0 ? (
        images.map(image => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default Gallery;
