// src/components/ImageDetails.js

import React, { useEffect, useState } from 'react';
import { fetchImageById } from '../api'; // Import the function from api.js
import { useParams } from 'react-router-dom';

const ImageDetails = () => {
  const { id } = useParams(); // Get the image ID from the URL
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const fetchedImage = await fetchImageById(id);
        setImage(fetchedImage);
      } catch (err) {
        setError(err.message);
      }
    };

    getImage();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image.url} alt={image.title} />
      <h1>{image.title}</h1>
      <p>{image.description}</p>
    </div>
  );
};

export default ImageDetails;
