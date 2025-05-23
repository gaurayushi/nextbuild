// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';

dotenv.config();
const app = express();

// ✅ Allow multiple frontend origins
const allowedOrigins = (process.env.FRONTENDS || '').split(',');

app.use(cors({
  origin: (origin, callback) => {
    // Allow undefined origin (Postman, mobile apps, etc.)
    if (!origin || allowedOrigins.includes(origin.trim()) || /^https:\/\/.*\.vercel\.app$/.test(origin)) {
      callback(null, true);
    } else {
      console.error('❌ Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

// ✅ DB connection + Server start
connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`🚀 Server running at http://localhost:${process.env.PORT}`)
  );
}).catch((err) => {
  console.error('❌ MongoDB connection failed:', err);
});
