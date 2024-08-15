// src/api.js

export const fetchImages = async () => {
  const url = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

// Fetch a single image by its ID
export const fetchImageById = async (id) => {
  const url = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
};
