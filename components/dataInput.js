import './dataInput.css';
import React, { useState } from 'react';

const qualityOptions = [20, 40, 60, 80, 100];
const thicknessOptions = ['1/64"', '1/32"', '1/16"', '1/8"',
  '3/16"', '5/16"', '1/4"', '3/8"',
  '1/2"', '3/4"', '1"', '2"'
];
const materialColorOptions = ['Clear', 'Mate Black', 'White', 'Gray', 'Red', 'Blue'];
const materialOptions = ['Wood', 'Aluminum', 'PVC', 'Stainless Steel', 'Plain Steel', 'Glass', 'Mirror', 'Acrylic', 'Stone', 'Rubber', 'Galvanized']

const InputComponent = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [productThickness, setProductThickness] = useState('');
  const [productWidth, setProductWidth] = useState('');
  const [productHeight, setProductHeight] = useState('');
  const [productColor, setProductColor] = useState('');
  const [purchasedWidth, setPurchasedWidth] = useState('');
  const [purchasedHeight, setPurchasedHeight] = useState('');
  const [purchasedThickness, setPurchasedThickness] = useState('');
  const [materialColorPurchased, setMaterialColorPurchased] = useState('');
  const [materialCosts, setMaterialCosts] = useState(0);
  const [cutQuality, setCutQuality] = useState('');
  const [estimatedAbrasiveUse, setEstimatedAbrasiveUse] = useState('');
  const [estimatedCutTime, setEstimatedCutTime] = useState('00:00:00');

  const isValidStopwatchTime = (inputTime) => {
    // Add validation logic here if needed
    // For simplicity, we assume any input is valid in this example.
    return true;
  };

  const handleStopwatchTimeChange = (e) => {
    const inputTime = e.target.value;
    if (isValidStopwatchTime(inputTime)) {
      setEstimatedCutTime(inputTime);
    }
  };

  const handleSubmit = () => {
    const formData = {
      productName,
      materialType,
      productThickness,
      productWidth,
      productHeight,
      productColor,
      purchasedWidth,
      purchasedHeight,
      purchasedThickness,
      materialColorPurchased,
      materialCosts,
      cutQuality,
      estimatedAbrasiveUse,
      estimatedCutTime,
    };
    onSubmit(formData); // Call the onSubmit prop with the form data
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <label style={{ marginTop: '50px' }} className="input-label">
        Product Name:
        <input
          className="input-field"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <label style={{ marginTop: '50px' }} className="input-label">
        Material Type:
        <select
          className="input-field"
          value={materialType}
          onChange={(e) => setMaterialType(e.target.value)}
        >
          <option value=""> </option>
          {materialOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="input-label">
        Product Thickness (feet):
        <select
          className="input-field"
          value={productThickness}
          onChange={(e) => setProductThickness(e.target.value)}
        >
          <option value=""> </option>
          {thicknessOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="input-label">
        Product Width (feet):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={productWidth}
          onChange={(e) => setProductWidth(e.target.value)}
        />
      </label>
      <label className="input-label">
        Product Height (feet):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={productHeight}
          onChange={(e) => setProductHeight(e.target.value)}
        />
      </label>
      <label className="input-label">
        Product Color:
        <select
          className="input-field"
          value={productColor}
          onChange={(e) => setProductColor(e.target.value)}
        >
          <option value=""> </option>
          {materialColorOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label style={{ marginTop: '50px' }} className="input-label">
        Purchased Width (feet):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={purchasedWidth}
          onChange={(e) => setPurchasedWidth(e.target.value)}
        />
      </label>
      <label className="input-label">
        Purchased Height (feet):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={purchasedHeight}
          onChange={(e) => setPurchasedHeight(e.target.value)}
        />
      </label>
      <label className="input-label">
        Purchased Thickness (feet):
        <select
          className="input-field"
          value={purchasedThickness}
          onChange={(e) => setPurchasedThickness(e.target.value)}
        >
          <option value=""> </option>
          {thicknessOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="input-label">
        Material Color:
        <select
          className="input-field"
          value={materialColorPurchased}
          onChange={(e) => setMaterialColorPurchased(e.target.value)}
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
        Material Costs ($):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={materialCosts}
          onChange={(e) => setMaterialCosts(parseFloat(e.target.value))}
        />
      </label>
      <label style={{ marginTop: '50px' }} className="input-label">
        Cut Quality:
        <select
          className="input-field"
          value={cutQuality}
          onChange={(e) => setCutQuality(e.target.value)}
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
        Estimated Abrasive Use (lbs):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={estimatedAbrasiveUse}
          onChange={(e) => setEstimatedAbrasiveUse(e.target.value)}
        />
      </label>
      <label className="input-label">
        Estimated Cut Time:
        <input
          className="input-field"
          type="text"
          value={estimatedCutTime}
          onChange={handleStopwatchTimeChange}
        />
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
