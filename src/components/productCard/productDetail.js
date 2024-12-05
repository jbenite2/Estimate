import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ index }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Fetch data from your PlanetScale database using the provided API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/getQuote?index=1`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [index]);

  if (!productData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {productData.id}</p>
      <p>Product Name: {productData.productName}</p>
      <p>Product Height: {productData.productHeight}</p>
      <p>Product Color: {productData.productColor}</p>
      <p>Material Type: {productData.materialType}</p>
      <p>Cut Quality: {productData.cutQuality}</p>
      <p>Product Thickness: {productData.productThickness}</p>
      <p>Product Width: {productData.productWidth}</p>
      <p>Purchased Width: {productData.purchasedWidth}</p>
      <p>Purchased Height: {productData.purchasedHeight}</p>
      <p>Purchased Thickness: {productData.purchasedThickness}</p>
      <p>Material Color Purchased: {productData.materialColorPurchased}</p>
      <p>Material Costs: {productData.materialCosts}</p>
      <p>Estimated Abrasive Use: {productData.estimatedAbrasiveUse}</p>
      <p>Estimated Cut Time: {productData.estimatedCutTime}</p>
      <p>File Name: {productData.fileName}</p>
    </div>
  );
};

export default ProductDetail;
