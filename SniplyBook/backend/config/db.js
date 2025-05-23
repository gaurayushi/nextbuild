import mongoose from 'mongoose';
import 'dotenv/config';

export default async function connectDB() {
  console.log('Connecting to', process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('MongoDB connected');
}
