import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import configurePassport from './config/passport.js';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
configurePassport(passport);

app.use('/api/auth', authRoutes);
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection();
});
