// middleware/upload.js
const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, 'image-' + uniqueSuffix + extension);
  }
});

const videoStorage = multer.diskStorage({
  destination: 'public/videos',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, 'video-' + uniqueSuffix + extension);
  }
});

const uploadImage = multer({ storage: imageStorage }).single('image');
const uploadVideo = multer({ storage: videoStorage }).single('video');

module.exports = { uploadImage, uploadVideo };
