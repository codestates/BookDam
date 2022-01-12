const router = require('express').Router();
const uploadController = require('../controller/upload');
const multer = require('multer');
const upload = multer({
  dest: 'userImage/'
});

router.post('/', upload.single('userImage'), uploadController.post);

module.exports = router;
