import express from 'express';
import {
  createEducation,
  createExperience,
  createProfile,
  getProfile,
  uploadCoverImage,
} from '../controllers/profile.controller.js';
import upload from '../middlewares/multer.js';
const router = express.Router();

router.post('/create-profile', createProfile);
router.post('/cover', upload.single('coverImage'), uploadCoverImage);
router.post('/experience', createExperience);
router.post('/education', createEducation);
router.get('post/:userId', getProfile);

export default router;
