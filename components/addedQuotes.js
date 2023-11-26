import React, {useEffect, useState} from 'react';
import AWS from 'aws-sdk';
require('dotenv').config();

export default function DisplayAddedQuotes() {
	const [imageSrc, setImageSrc] = useState(null);

	let bucket = new AWS.S3({
		region: 'us-east-2',
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
	});
	
	var params = {
		Bucket: 'estimate-bucket', 
		Delimiter: '/'
	};


	bucket.listObjects(params, function(err, data){
		if (err) {
			console.log(err);
		} else {
			console.log(data);
			console.log(data.Contents[0].Key)
			setImageSrc(data.Contents[0].Key)
		}
	})
	

  return (
    <>
	  <h1> Testing Cat Image </h1>
	  <img src={`https://estimate-bucket.s3.us-east-2.amazonaws.com/${imageSrc}`} alt='Cat Image' />
	</>
  );
}

