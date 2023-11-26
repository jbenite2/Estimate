import AWS from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes)
require('dotenv').config();

let bucket = new AWS.S3({
	region: 'us-east-2',
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
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
