import './dataInput.css';
import React, { useState } from 'react';

const qualityOptions = [20, 40, 60, 80, 100];
const thicknessOptions = ['1/64"', '1/32"', '1/16"', '1/8"',
  '3/16"', '5/16"', '1/4"', '3/8"',
  '1/2"', '3/4"', '1"', '2"'
];
const materialColorOptions = ['Clear', 'Mate Black', 'White', 'Gray', 'Red', 'Blue'];
const materialOptions = ['Wood', 'Aluminum', 'PVC', 'Stainless Steel', 'Plain Steel', 'Glass', 'Mirror', 'Acrylic', 'Stone', 'Rubber', 'Galvanized']
const productClassificationOptions = ['barandas_CNC_Cut', 'barandas_horizontales', 'barandas_vidrio', 'barandas_cable', 'barandas_picket']

const InputComponent = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [unitCost, setUnitCost] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [productThickness, setProductThickness] = useState('');
  const [productWidth, setProductWidth] = useState('');
  const [productHeight, setProductHeight] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productColor, setProductColor] = useState('');
  const [corte, setCorte] = useState('');
  const [ensamblaje, setEnsamblaje] = useState('');
  const [soldadura, setSoldadura] = useState('');
  const [pulido, setPulido] = useState('');
  const [instalacion, setInstalacion] = useState('');
  const [purchasedWidth, setPurchasedWidth] = useState('');
  const [purchasedHeight, setPurchasedHeight] = useState('');
  const [purchasedThickness, setPurchasedThickness] = useState('');
  const [materialColorPurchased, setMaterialColorPurchased] = useState('');
  const [materialCosts, setMaterialCosts] = useState('');
  const [cutQuality, setCutQuality] = useState('');
  const [estimatedAbrasiveUse, setEstimatedAbrasiveUse] = useState('');
  const [estimatedCutDistance, setEstimatedCutDistance] = useState('');
  const [estimatedCutTime, setEstimatedCutTime] = useState('00:00:00');
  const [suppliers, setSuppliers] = useState('');
  const [productClassification, setProductClassification] = useState('');

  const isValidStopwatchTime = (inputTime) => {
    return true;
  };

  const handleStopwatchTimeChange = (e) => {
    const inputTime = e.target.value;
    if (isValidStopwatchTime(inputTime)) {
      setEstimatedCutTime(inputTime);
    }
  };

  const handleSubmit = () => {
	console.log(loading)
	setLoading(true);
	alert("The form has been submitted. Please wait a few seconds for the data to be processed.");
    const formData = {
      productName,
	  clientName,
	  projectName,
	  salePrice,
      unitCost,
      materialType,
      productThickness,
      productWidth,
      productHeight,
	  productWeight,
      productColor,
	  corte,
	  ensamblaje,
	  soldadura,
	  pulido,
	  instalacion,
      purchasedWidth,
      purchasedHeight,
      purchasedThickness,
      materialColorPurchased,
      materialCosts,
      cutQuality,
      estimatedAbrasiveUse,
	  estimatedCutTime,
	  estimatedCutDistance,
	  suppliers,
	  productClassification
	};
	onSubmit(formData)
	setTimeout(() => {
		setLoading(false);
		location.reload()
	}, 5000);
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
      <label style={{ marginTop: '0px' }} className="input-label">
        Client Name:
        <input
          className="input-field"
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </label>
      <label style={{ marginTop: '0px' }} className="input-label">
        Project Name:
        <input
          className="input-field"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </label>
      <label style={{ marginTop: '0px' }} className="input-label">
        Product Classification:
        <select
          className="input-field"
          value={productClassification}
          onChange={(e) => setProductClassification(e.target.value)}
        >
          <option value=""> </option>
          {productClassificationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label style={{ marginTop: '50px' }} className="input-label">
        Sale Price ($):
        <input
          className="input-field"
          type="text"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
        />
      </label>
      <label style={{ marginTop: '0px' }} className="input-label">
        Cost ($):
        <input
          className="input-field"
          type="text"
          value={unitCost}
          onChange={(e) => setUnitCost(e.target.value)}
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
        Product Weight (lbs):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={productWeight}
          onChange={(e) => setProductWeight(e.target.value)}
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
	  <h3 style={{ marginTop: '50px' }}>Métricas de Producción</h3>
      <label className="input-label">
         Corte (minutos):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={corte}
          onChange={(e) => setCorte(e.target.value)}
        />
      </label>
      <label className="input-label">
         Ensamblaje (minutos):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={ensamblaje}
          onChange={(e) => setEnsamblaje(e.target.value)}
        />
      </label>
      <label className="input-label">
         Soldadura (minutos):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={soldadura}
          onChange={(e) => setSoldadura(e.target.value)}
        />
      </label>
      <label className="input-label">
         Pulido (minutos):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={pulido}
          onChange={(e) => setPulido(e.target.value)}
        />
      </label>
      <label className="input-label">
	    Instalación (minutos):
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={instalacion}
          onChange={(e) => setInstalacion(e.target.value)}
        />
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
          onChange={(e) => setMaterialCosts(e.target.value)}
        />
      </label>
      <label style={{ marginTop: '0px' }} className="input-label">
        Supplier(s):
        <input
          className="input-field"
          type="text"
          value={suppliers}
          onChange={(e) => setSuppliers(e.target.value)}
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
        Estimated Cut Time(hh:mm:ss):
        <input
          className="input-field"
          type="text"
          value={estimatedCutTime}
          onChange={handleStopwatchTimeChange}
        />
      </label>
      <label className="input-label">
        Estimated Cut Distance (inches):
        <input
          className="input-field"
          type="text"
          value={estimatedCutDistance}
          onChange={(e) => setEstimatedCutDistance(e.target.value)}
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
		disabled={loading}
      >
	   {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default InputComponent;
