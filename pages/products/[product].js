import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header'

export default function TemplateList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localImages, setLocalImages] = useState([]);
  const router = useRouter();
  const { product } = router.query;


  useEffect(() => {
	  if (product){
		  const incrementedProduct = parseInt(product, 10) + 1;
		fetchProductData(incrementedProduct.toString());
	  }
  }, [product]);

  const fetchProductData = async (product) => {
    try {
      // Call the backend API endpoint using the fetch API
		const response = await fetch(`/api/getAllProjectInfo?index=${product}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // Parse the response data
      const info = await response.json();
      setData(info);
    } catch (error) {
      console.error('Error fetching templates:', error);
    }
  };

  useEffect(() => {
      setLoading(false); 
  }, [data]);

  return (
	  <div>
		  <Header />
		  <div>
			  <h1>Product Detail</h1>
			  {loading ? (
				<p>Loading...</p>
			  ) : (
				<div>
				  {Object.keys(data).map((key) => (
					<p key={key}>
					  <strong>{key}:</strong> {data[key]}
					</p>
				  ))}
				</div>
			  )}
		  </div>
	  </div>
  );
}

