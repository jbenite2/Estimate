import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/header'
import Link from 'next/link'
import './extraInfo.css'

export default function waterJet() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { product } = router.query;


  useEffect(() => {
	  if (product){
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
		  <Header />
		  <div>
			  {loading ? (
				<p>Loading...</p>
			  ) : (
				<div className='ProductDetailsContainer'>
					<h1>Water Jet Stats</h1>
					<div className='KeyInfoContainer'>
						<div className='KeyInfo KeyInfo1'>
							<p>Calidad de Corte: {data.cutQuality}</p>
							<p>Cantidad de Abrasivo Estimada: {data.estimatedAbrasiveUse}</p>
							<p>Distancia de Corte Estimada: {data.estimatedCutDistance}</p>
							<p>Tiempo de Corte Estimado: {data.estimatedCutTime}</p>
						</div>
					<div className='PictureContainer'>
						<img
							src={`/cutting.png`}
							className='Picture'
						  />
					</div>
					<button className='backButton' onClick={() => router.back()}>Back</button>
					</div>
				</div>
			  )}
		  </div>
	  </div>

  );
} 
