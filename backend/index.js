import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';
import authRoutes from './routes/auth.js';
import configurePassport from './config/passport.js';
import passport from 'passport';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use(passport.initialize());
configurePassport(passport);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`port is running ${PORT}`);
  dbConnection();
});
