import express from 'express';
import passport from 'passport';
import {
  signup,
  login,
  googleAuthCallback,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/google', passport.authenticate('google'));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
  }),
  googleAuthCallback
);

export default router;
