import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import './extraInfo.css'


export default function ProductoFinal() {
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
						<h1>Producto Final Data</h1>
						<div className='KeyInfoContainer'>
							<div className='KeyInfo KeyInfo1'>
								<p>Color: {data.productColor}</p>
								<p>Altura: {data.productHeight}</p>
								<p>Ancho: {data.productWidth}</p>
								<p>Espesor: {data.productThickness}</p>
								<p>Peso: {data.productWeight}</p>
								<div className='PictureContainer'>
									<img
										src={`${data.fileName}`}
										alt={`Picture is loading...`}
										className='Picture'
									/>
								</div>
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

