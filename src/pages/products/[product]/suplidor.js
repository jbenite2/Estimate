import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import './extraInfo.css'


export default function Suplidor() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { product } = router.query;


  useEffect(() => {
    if (product) {
      const incrementedProduct = parseInt(product, 10);
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
    console.log(data);
  }, [data]);


  return (
    <div className='wholePage'>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='ProductDetailsContainer'>
            <h1>Suplidor Data</h1>
            <div className='KeyInfoContainer'>
              <div className='KeyInfo KeyInfo1'>
                <p>Nombre del Suplidor: {data.suppliers}</p>
                <p>Color del Material Adquirido: {data.materialColorPurchased}</p>
                <p>Tipo de Material: {data.materialType}</p>
                <p>Costo del Material: {data.materialCosts}</p>
              </div>
              <Link href={`/products/${product}`} className='backButton'>
                Back
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}

