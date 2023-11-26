// src/pages/products/[product].js

import { useRouter } from 'next/router';
import Header from '../../components/header'
import ProductDetail from '../../components/productDetail'

const ProductPage = () => {
  const router = useRouter();
  const { product } = router.query;

  // You can use the 'product' variable to customize the content and functionality

  return (
    <div>
      <Header />
      <h1>{`Routing for ${product}`}</h1>
      <ProductDetail index={product} />
    </div>
  );
};

export default ProductPage;
