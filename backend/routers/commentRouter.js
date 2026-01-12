import express from 'express';
import multer from 'multer';
import { uploadComment, getComments } from '../controllers/commentController.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

const router = express();

router.get('/', getComments);
router.post('/uploads', upload.single('image'), uploadComment);

export default router;