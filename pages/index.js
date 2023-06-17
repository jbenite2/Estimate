import React, { useState, useEffect } from 'react';
import './index.css';
import { Dropdown } from 'semantic-ui-react';
import $ from 'jquery';
import 'semantic-ui-css/semantic.min.css';


export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId === selectedImage ? null : imageId);
  };


  const colorOptions = [
    { key: 'red', value: 'red', text: 'Red' },
    { key: 'blue', value: 'blue', text: 'Blue' },
    { key: 'green', value: 'green', text: 'Green' },
    { key: 'yellow', value: 'yellow', text: 'Yellow' },
  ];

  const thicknessOptions = [
    { key: '1/16', value: '1/16', text: '1/16' },
    { key: '1/8', value: '1/8', text: '1/8' },
    { key: '1/4', value: '1/4', text: '1/4' },
    { key: '1/2', value: '1/2', text: '1/2' },
    { key: '1', value: '1', text: '1' },
  ];
  

  return (
    <>
      <div className="logo-container">
        <img className="logo-image" src="/BM-Logo.png" alt="Logo" />
      </div>
      <div className="container-wrapper">
        <div className="container container1">
          <img
            src="/patterns/p1.png"
            className={`image-item ${selectedImage === 'p1' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p1')}
            alt="Pattern 1"
          />
          <img
            src="/patterns/p2.png"
            className={`image-item ${selectedImage === 'p2' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p2')}
            alt="Pattern 2"
          />
          <img
            src="/patterns/p3.png"
            className={`image-item ${selectedImage === 'p3' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p3')}
            alt="Pattern 3"
          />
          <img
            src="/patterns/p4.png"
            className={`image-item ${selectedImage === 'p4' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p4')}
            alt="Pattern 4"
          />
          <img
            src="/patterns/p5.png"
            className={`image-item ${selectedImage === 'p5' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p5')}
            alt="Pattern 5"
          />
          <img
            src="/patterns/p6.png"
            className={`image-item ${selectedImage === 'p6' ? 'selected' : ''}`}
            onClick={() => handleImageClick('p6')}
            alt="Pattern 6"
          />
        </div>
        <div className="container container2">
            <img src={`/patterns/${selectedImage}.png`}></img>
        </div>
        <div className="container container3">
            <Dropdown placeholder="Select color" className='color-dropdown' clearable options={colorOptions} selection />
            <Dropdown placeholder="Select thickness" className='thickness-dropdown' clearable options={thicknessOptions} selection />
        </div>
      </div>
    </>
  );
}
