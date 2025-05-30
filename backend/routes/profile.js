import express from 'express';
import { createProfile, getProfile } from '../controllers/profile.controller';

const router = express.Router();

router.post('/create-profile', createProfile);
router.get('post/:userId', getProfile);
