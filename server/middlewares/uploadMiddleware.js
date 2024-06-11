const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, 'public/images'); // Store images in 'public/images' folder
    } else if (file.mimetype.startsWith('video/')) {
      cb(null, 'public/videos'); // Store videos in 'public/videos' folder
    } else {
      cb(new Error('Unsupported file type'));
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname); // Use path module to get extension
    const filename = file.fieldname + '-' + uniqueSuffix + extension;
    cb(null, filename);
    req.filePaths = req.filePaths || []; // Store file paths in the request object
    req.filePaths.push(filename);
  },
});

exports.upload = multer({ storage: storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 },
]);

