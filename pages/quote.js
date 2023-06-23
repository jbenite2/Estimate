import React from 'react';
import './quote.css';
import { Dropdown, Input } from 'semantic-ui-react';
import Header from '../components/header';

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

const qualityOptions = [
  { key: '20', value: '20', text: '20' },
  { key: '40', value: '40', text: '40' },
  { key: '60', value: '60', text: '60' },
  { key: '80', value: '80', text: '80' },
  { key: '100', value: '100', text: '100' },
];

export default function Quote() {
  return (
    <div className="page-container blue-theme">
        <Header/>
      <h1>Product Customization Page</h1>
      <div className="input-container">
        <div>
          <label>Picture:</label>
          <Input placeholder="Enter picture" />
        </div>
        <div>
          <label>Time:</label>
          <Input placeholder="Enter time" />
        </div>
        <div>
          <label>Lbs:</label>
          <Input placeholder="Enter lbs" />
        </div>
        <div>
          <label>Color:</label>
          <Dropdown
            placeholder="Select color"
            fluid
            selection
            options={colorOptions}
          />
        </div>
        <div>
          <label>Thickness:</label>
          <Dropdown
            placeholder="Select thickness"
            fluid
            selection
            options={thicknessOptions}
          />
        </div>
        <div>
          <label>Quality:</label>
          <Dropdown
            placeholder="Select quality"
            fluid
            selection
            options={qualityOptions}
          />
        </div>
      </div>
    </div>
  );
};
