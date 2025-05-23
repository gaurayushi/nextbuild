// backend/server.js

import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';

// 1) Load environment variables from .env
dotenv.config();

const app = express();

// 2) Enable CORS for your frontend origin
app.use(
  cors({
    origin: process.env.FRONTEND || '*'  
  })
);

// 3) Parse JSON bodies
app.use(express.json());

// 4) Connect to MongoDB
connectDB();

// 5) Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

// 6) Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
