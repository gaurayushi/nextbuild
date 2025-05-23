import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';

export async function register(req, res) {
  const { email, password } = req.body;
  if (await User.exists({ email })) {
    return res.status(400).json({ msg: 'User already exists' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user   = await new User({ email, password: hashed }).save();
  const token  = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
}
