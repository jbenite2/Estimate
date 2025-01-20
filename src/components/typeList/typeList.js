import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import productData from '../productCard/productDetail'; // Import your product data here
import './typeList.css'

export default function TypeList(props) {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localImages, setLocalImages] = useState([]);

  useEffect(() => {
    fetchTemplates(props.productClassification);
  }, []);

  const fetchTemplates = async (classification) => {
    const encodedClassification = encodeURIComponent(classification);
    try {
      // Call the backend API endpoint using the fetch API
      const response = await fetch(`/api/getPics?productClassification=${encodedClassification}`, {
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
    console.log(pics);
  }, [pics]);

  return (
    <div className='broaderDiv'>
      <div className='header'>
        <h1>Product List</h1>
      </div>
      <div className='templateContainer'>
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='grid-container'>
            {pics.map((picture, index) => (
              <Link href={`/products/${picture.id - 1}`} key={picture.id - 1}>
                <img
                  src={`${picture.fileName}`}
                  alt={`Picture ${picture.fileName}`}
                  className='individualTemplateStyle'
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
