import React, { use, useEffect, useState } from 'react';

export default function TemplateList() {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  useEffect(() => {
    fetch('/api/filterImages')
      .then((response) => response.json())
      .then((data) => {
        setLocalImages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching filtered images:', error);
        setLoading(false);
      });
  }, []);

  const fetchTemplates = async () => {
    try {
      // Call the backend API endpoint using the fetch API
      const response = await fetch('/api/getPics', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Parse the response data
      const data = await response.json();
      setPics(data);
      setLoading(false); // Set loading to false when the data is fetched
    } catch (error) {
      console.error('Error fetching templates:', error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    console.log(pics)
  },[pics]);


  return (
    <div>
      <h1>Picture List</h1>
      {loading ? ( // Show a loading message or spinner while waiting for the data
        <div>Loading...</div>
      ) : (
        <div>
          {pics.map((picture, index) => (
            <img
              key={index}
              src={`/images/${localImages[picture.fileName]}`} // Replace with the actual path to your pictures
              alt={`Picture ${index}`}
              style={{ width: '200px', height: '200px', margin: '10px' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
