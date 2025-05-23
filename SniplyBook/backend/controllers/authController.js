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
  console.log('req.body:', req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    console.log(' Missing email or password');
    return res.status(400).json({ msg: 'Missing credentials' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    console.log(' User not found');
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log(' Incorrect password');
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  console.log('Login successful for:', email);
  res.json({ token });
}
