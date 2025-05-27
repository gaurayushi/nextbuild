// controllers/user.controller.js
const User = require("../models/User");

exports.checkUsername = async (req, res) => {
  const user = await User.findOne({ username: req.query.username });
  res.json({ available: !user });
};

exports.createUser = async (req, res) => {
  const data = { ...req.body, profilePhoto: req.file?.filename };
  const user = new User(data);
  await user.save();
  res.status(201).json({ message: "User saved successfully", user });
};
