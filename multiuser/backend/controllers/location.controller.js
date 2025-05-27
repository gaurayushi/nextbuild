const Country = require("../models/Country");
const State = require("../models/State");
const City = require("../models/City");

exports.getCountries = async (req, res) => {
  const countries = await Country.find({});
  res.json(countries);
};

exports.getStates = async (req, res) => {
  const { countryId } = req.params;
  const states = await State.find({ countryId });
  res.json(states);
};

exports.getCities = async (req, res) => {
  const { stateId } = req.params;
  const cities = await City.find({ stateId });
  res.json(cities);
};
