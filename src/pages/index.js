import React, { useState, useEffect } from 'react';
import './styling/index.css';
import { Dropdown, Input, Reveal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Comforter, Maiden_Orange } from 'next/font/google';
import Header from '../components/header/header'
import productData from '../components/productCard/productDetail'
import { useRouter } from 'next/router';

export default function Home() {
  return {
    redirect: {
      destination: '/categorias',
      permanent: true,
    },
  };
}
