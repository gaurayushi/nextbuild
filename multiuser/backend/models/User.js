const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profilePhoto: String,
  username: { type: String, required: true, unique: true },
  gender: String,
  customGender: String,
  newPassword: String,
  profession: String,
  companyName: String,
  addressLine1: String,
  country: String,
  state: String,
  city: String,
  subscriptionPlan: {
    type: String,
    enum: ["Basic", "Pro", "Enterprise"],
    default: "Basic",
  },
  newsletter: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
