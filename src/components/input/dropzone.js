import { useState } from "react";
import axios from "axios";
import Image from 'next/image';

const Dropzone = ({ dirs }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = async (onFileDrop) => {
    setUploading(true);
    try {
      //Fail try except if not file is passed in
      if (!selectedFile) return;

      //Get secure URL from our server


      //Post the image directly to the S3 bucket



      //Post request to my server to store any extra data


      // Create a FormData object and append the selected file to it
      const formData = new FormData();
      formData.append("myImage", selectedFile);

      // Send the FormData object to your server using axios or fetch API
      const { data } = await axios.post("/api/image", formData);
    } catch (error) {
      console.log(error)
    }
    setUploading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-20 space-y-6">
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
            <Image
              src={selectedImage}
              alt={`Preview ${selectedFile.name}`}
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
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
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1", justifyContent: "center" }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
    </div>
  );
};

export default Dropzone;
