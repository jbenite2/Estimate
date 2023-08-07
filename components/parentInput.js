import InputComponent from './dataInput';
import { useState } from "react";
import axios from "axios";
import handle from '../pages/api/addQuote';

export default function ParentComponent() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;

      const formData = new FormData();
      formData.append("myImage", selectedFile);

      await axios.post("/api/image", formData);
    } catch (error) {
    }
    setUploading(false);
  };


  const handleFormSubmit = async (formData) => {
    // Add the logic to set the selected file name to the formData
    if (selectedFile) {
      formData.file = selectedFile.name;
    }
    handleUpload(); 
  
    try {
      // Call the backend API endpoint using the fetch API
      const response = await fetch('/api/addQuote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData, selectedFile.name),
      });
  
      // Parse the response data
      const newEntry = await response.json();
  
      // If you need to do something with the response data in the frontend, you can do it here.
    } catch (error) {
      console.error('Error:', error);
      // Handle errors or display error messages as needed.
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <img src={selectedImage} alt="" />
          ) : (
            <div
              style={{
                width: '40vh', // Adjust the width as desired
                height: '200px',
                border: `2px dashed gray`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'gray', // Change text color when dragging files over
                fontSize: '1.2rem',
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
            >
              Drag and drop images here, or click to select files
            </div>
          )}
        </div>
      </label>
      <InputComponent onSubmit={handleFormSubmit} />
    </div>
  );
};
