const express = require("express");
const router = express.Router();
const Country = require("../models/Country");
const State = require("../models/State");
const City = require("../models/City");

router.get("/countries", async (req, res) => {
  const countries = await Country.find({});
  res.json(countries);
});

router.get("/states/:countryId", async (req, res) => {
  const states = await State.find({ country: req.params.countryId });
  res.json(states);
});

router.get("/cities/:stateId", async (req, res) => {
  const cities = await City.find({ state: req.params.stateId });
  res.json(cities);
});

module.exports = router;
