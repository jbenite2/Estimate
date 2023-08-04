// pages/api/filterImages.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public/images');

  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      res.status(500).json({ error: 'Error reading images directory' });
      return;
    }

    const filteredImages = files.reduce((result, file) => {
      if (file.includes('_')) {
        const parts = file.split('_');
        const key = parts[1];
        result[key] = file;
      }
      return result;
    }, {});

    res.status(200).json(filteredImages);
  });
}
