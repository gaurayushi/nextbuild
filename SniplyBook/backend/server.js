import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// 🔒 Allowed frontend domains for CORS (comma-separated in .env)
const allowedOrigins = new Set((process.env.FRONTENDS || '').split(',').map(s => s.trim()));

// ✅ CORS Configuration
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
    } else {
      console.error('❌ Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// 🧩 Middleware
app.use(express.json());
app.use(cookieParser());

// 📦 API Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

// ⚡ Connect to DB and start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err);
  });
