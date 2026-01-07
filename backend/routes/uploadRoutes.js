import express from 'express'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary.js'

const router = express.Router()

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'skymart/products',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
})

// Multer config
const upload = multer({
  storage,
})

// Upload route
router.post('/', upload.single('image'), (req, res) => {
  res.json({
    image: req.file.path, // Cloudinary URL
  })
})

export default router
