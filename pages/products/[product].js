import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import './[product].css'
import Link from 'next/link'

export default function TemplateList() {
		const [data, setData] = useState([]);
		const [loading, setLoading] = useState(true);
		const [localImages, setLocalImages] = useState([]);
		const router = useRouter();
		const { product } = router.query;
		const [creationDate, setCreationDate] = useState(null);
		const [costLinearFeet, setCostLinearFeet] = useState(null);

		const [profitMargin, setProfitMargin] = useState(null); // Initialize the profit margin state

	useEffect(() => {
	  if (data.unitCost && data.salePrice) {
		const cost = parseFloat(data.unitCost);
		const sale = parseFloat(data.salePrice);
		const margin = ((sale - cost) / sale) * 100;
		setProfitMargin(margin.toFixed(2)); 

		setCreationDate(data.createdAt.split('T')[0]);

		setCostLinearFeet((data.unitCost / data.estimatedCutDistance).toFixed(2));
	  }
	}, [data.unitCost, data.salePrice]);


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
  }, [data]);

  return (
	  <div className='wholePage'>
		  <Header />
		  <div>
			  {loading ? (
				<p>Loading...</p>
			  ) : (
				<div className='ProductDetailsContainer'>
					<div className='NamesContainer'>
						<p>Nombre del Producto:</p>
						<p className='productName'><b><u>{data.productName}</u></b></p>
						<p>Cliente: {data.clientName}</p>
						<p>Proyecto: {data.projectName}</p>
					</div>
					<div className='PictureContainer'>
						<img
							src={`${data.fileName}`}
							alt={`Picture ${data.fileName}`}
							className='Picture'
						  />
					</div>
					<div className='DateContainer'>
						<p>Fecha de Creación: {creationDate}</p>
						<p>Fecha de Entrega: N/A</p>
						<p>Fecha de Instalacion: N/A</p>
					</div>
					<h1>Información Clave</h1>
					<div className='KeyInfoContainer'>
						<div className='KeyInfo KeyInfo1'>
							<p>Precio de Venta Final: ${data.salePrice}</p>
							<p>Margen de Ganancia: {profitMargin}%</p>
							<p>Costo Unitario: ${data.unitCost}</p>
						</div>
						<div className='KeyInfo KeyInfo2'>
							<p>Costo por Pie Cuadrado: $3</p>
							<p>Costo por Pie Lineal: ${costLinearFeet}</p>
							<p>Venta del Pie Cuadrado: $10</p>
						</div>
					</div>
					<div className='MoreInfoContainer'>
						<button><Link className='Link' href={product+'/waterJet'}>Water Jet</Link></button>
						<button><Link className='Link' href={product+'/productoFinal'}>Producto Final</Link></button>
						<button><Link className='Link' href={product+'/suplidor'}>Suplidor</Link></button>
					</div>
				</div>
			  )}
		  </div>
	  </div>
  );
}

