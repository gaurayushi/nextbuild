const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
});

module.exports = mongoose.models.State || mongoose.model("State", stateSchema);
