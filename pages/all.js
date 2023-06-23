import React, { useState, useEffect } from 'react';
import './all.css';
import { Dropdown, Input, Reveal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Comforter, Maiden_Orange } from 'next/font/google';
import Header from '../components/header'
import productData from '../components/productData'


export default function Home() {
  // const [selectedImage, setSelectedImage] = useState('p1');

  // const handleImageClick = (imageId) => {
  //   setSelectedImage(imageId);
  // };


  // const colorOptions = [
  //   { key: 'red', value: 'red', text: 'Red' },
  //   { key: 'blue', value: 'blue', text: 'Blue' },
  //   { key: 'green', value: 'green', text: 'Green' },
  //   { key: 'yellow', value: 'yellow', text: 'Yellow' },
  // ];

  // const thicknessOptions = [
  //   { key: '1/16', value: '1/16', text: '1/16' },
  //   { key: '1/8', value: '1/8', text: '1/8' },
  //   { key: '1/4', value: '1/4', text: '1/4' },
  //   { key: '1/2', value: '1/2', text: '1/2' },
  //   { key: '1', value: '1', text: '1' },
  // ];

  // const qualityOptions = [
  //   { key: '20', value: '20', text: '20' },
  //   { key: '40', value: '40', text: '40' },
  //   { key: '60', value: '60', text: '60' },
  //   { key: '80', value: '80', text: '80' },
  //   { key: '100', value: '100', text: '100' },
  // ];
  

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

// Tiempo de Comforter
// Material 
// PUlgada de reocrr

// Botón para dar save a un database el precio final

// Maid

// Madera 1/4 
// Aluminio 1/8