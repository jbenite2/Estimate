import React, { useState, useEffect } from 'react';
import './index.css';
import { Dropdown, Input, Reveal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Comforter, Maiden_Orange } from 'next/font/google';
import Header from '../components/header'
import productData from '../components/productData'


export default function Home() {

  return (
    <>
      <Header/>
      <div className="image-stack">
        {Array.from({ length: 49 }, (_, index) => (
          <React.Fragment key={index + 1}>
            <img
              src={`/patterns/p${index + 1}.png`}
              alt={`Pattern ${index + 1}`}
              className="rotated-image"
            />
            {index !== 48 && <div className="spacer"></div>}
          </React.Fragment>
        ))}
      </div>
    </>
  );
  
  

}