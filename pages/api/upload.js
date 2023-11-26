// import multer from 'multer';
// import path from 'path';

// // Set up multer storage to specify the upload destination
// const storage = multer.diskStorage({
//   destination: path.join(process.cwd(), 'public/images'),
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5, // 5 MB (adjust as needed)
//   },
// }).array('file');

// export default function handler(req, res) {
//   return new Promise((resolve, reject) => {
//     upload(req, res, (err) => {
//       if (err) {
//         console.error('Error during file upload:', err);
//         return reject({ error: 'File upload failed' });
//       }

//       // Process the uploaded files if needed
//       // For example, you can access the uploaded files using req.files
//       // and then save the file paths to a database or JSON file.

//       return resolve({ success: true });
//     });
//   })
//     .then((response) => {
//       return res.status(200).json(response);
//     })
//     .catch((error) => {
//       return res.status(500).json(error);
//     });
// }
import AWS from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes)

let bucket = new AWS.S3({
	region: 'us-east-2',
	accessKeyId: 'AKIAXRCFHVNPVA2XYQUO',
	secretAccessKey: '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'
});

var params = {
	Bucket: 'estimate-bucket', 
	Delimiter: '/'
};


export async function generateUploadURL(){
	try {
		const rawBytes = await randomBytes(16);
		const imageName = rawBytes.toString('hex');

		const params = {
		  Bucket: 'estimate-bucket',
		  Key: imageName,
		  Expires: 60
		};

		const uploadURL = await bucket.getSignedUrlPromise('putObject', params);
		
		// Log the generated upload URL
		console.log('Generated Upload URL:', uploadURL);

		return uploadURL;
  } catch (error) {
		console.error('Error generating upload URL:', error);
		throw error;
  }	
}
