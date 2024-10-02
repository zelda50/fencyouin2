import formidable from 'formidable';
import fs from 'fs';
import AWS from 'aws-sdk';

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle files
  },
};

// Initialize S3 client with your credentials
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, // Your S3 region
});

const uploadHandler = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "File parsing failed" });
    }

    const { file } = files;
    const fileStream = fs.createReadStream(file.filepath);

    const params = {
      Bucket: process.env.AWS_S3_BUCKET, // Your S3 bucket name
      Key: file.originalFilename,        // File name to save as
      Body: fileStream,
      ContentType: file.mimetype,        // Content type of the file (image, video, etc.)
      ACL: 'public-read',                // Make the file publicly readable
    };

    try {
      const uploadResponse = await s3.upload(params).promise();
      res.status(200).json({ message: "File uploaded successfully", url: uploadResponse.Location });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "File upload to S3 failed" });
    }
  });
};

export default uploadHandler;
