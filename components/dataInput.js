import './dataInput.css';
import React, { useState } from 'react';

const qualityOptions = [20, 40, 60, 80, 100];
const thicknessOptions = [
  '', '1/64"', '1/32"', '1/16"', '1/8"',
  '3/16"', '5/16"', '1/4"', '3/8"',
  '1/2"', '3/4"', '1"', '2"'
];
const materialColorOptions = ['', 'Black', 'White', 'Gray', 'Red', 'Blue'];

const InputComponent = ({ onSubmit}) => {
  const [thickness, setThickness] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [materialColor, setMaterialColor] = useState('');
  const [quality, setQuality] = useState('');

  const handleSubmit = () => {
    const formData = {
      thickness,
      materialName,
      height,
      width,
      materialColor,
      quality,
    };
    console.log(formData); // You can replace this with any other action you want to perform with the data
    onSubmit(formData); // Call the onSubmit prop with the form data
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <label className="input-label">
        Quality:
        <select
          className="input-field"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
        >
          <option value=""> </option>
          {qualityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="input-label">
        Material Name:
        <input
          className="input-field"
          type="text"
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
        />
      </label>
      <label className="input-label">
        Height (inches):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label className="input-label">
        Width (inches):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <label className="input-label">
        Material Color:
        <select
          className="input-field"
          value={materialColor}
          onChange={(e) => setMaterialColor(e.target.value)}
        >
          <option value=""> </option>
          {materialColorOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="input-label">
        Thickness:
        <select
          className="input-field"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        >
          <option value=""> </option>
          {thicknessOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default InputComponent;
