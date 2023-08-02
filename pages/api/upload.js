import multer from 'multer';
import path from 'path';

// Set up multer storage to specify the upload destination
const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'public/images'),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB (adjust as needed)
  },
}).array('file');

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    upload(req, res, (err) => {
      if (err) {
        console.error('Error during file upload:', err);
        return reject({ error: 'File upload failed' });
      }

      // Process the uploaded files if needed
      // For example, you can access the uploaded files using req.files
      // and then save the file paths to a database or JSON file.

      return resolve({ success: true });
    });
  })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}
