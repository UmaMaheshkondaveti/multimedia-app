    const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const { upload, search, viewFile } = require('../controllers/mediaController');
const { register, login } = require('../controllers/authController');
const router = express.Router();

const uploadMiddleware = multer({ dest: 'uploads/' });

router.post('/auth/register', register);
router.post('/auth/login', login);
router.post('/upload', auth.protect, uploadMiddleware.single('file'), upload);
router.get('/search', auth.protect, search);
router.get('/files/:id', auth.protect, viewFile);

module.exports = router;
