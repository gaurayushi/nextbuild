const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.checkUsername = async (req, res) => {
  const user = await User.findOne({ username: req.query.username });
  res.json({ available: !user });
};

exports.createUser = async (req, res) => {
  const data = { ...req.body, profilePhoto: req.file?.filename };

  // Hash password
  if (data.newPassword) {
    const salt = await bcrypt.genSalt(10);
    data.newPassword = await bcrypt.hash(data.newPassword, salt);
  }

  const user = new User(data);
  await user.save();

  // Create JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
  });

  res.status(201).json({ message: "User saved successfully", user });
};
