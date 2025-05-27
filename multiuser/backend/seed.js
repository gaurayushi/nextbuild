require("dotenv").config();
const mongoose = require("mongoose");
const Country = require("./models/Country");
const State = require("./models/State");
const City = require("./models/City");

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB connected");

  await Country.deleteMany({});
  await State.deleteMany({});
  await City.deleteMany({});

  // Countries
  const [india, usa, canada, uk, germany, australia, japan, france, brazil, uae] =
    await Country.insertMany([
      { name: "India" },
      { name: "USA" },
      { name: "Canada" },
      { name: "United Kingdom" },
      { name: "Germany" },
      { name: "Australia" },
      { name: "Japan" },
      { name: "France" },
      { name: "Brazil" },
      { name: "UAE" },
    ]);

  // States
  const [
    maharashtra, delhi, california, texas, ontario,
    britishColumbia, bavaria, nsw, tokyo, ileDeFrance,
    saoPaulo, dubaiEmirate, scotland, quebec, queensland
  ] = await State.insertMany([
    { name: "Maharashtra", country: india._id },
    { name: "Delhi", country: india._id },
    { name: "California", country: usa._id },
    { name: "Texas", country: usa._id },
    { name: "Ontario", country: canada._id },
    { name: "British Columbia", country: canada._id },
    { name: "Bavaria", country: germany._id },
    { name: "New South Wales", country: australia._id },
    { name: "Tokyo Prefecture", country: japan._id },
    { name: "Île-de-France", country: france._id },
    { name: "São Paulo", country: brazil._id },
    { name: "Dubai Emirate", country: uae._id },
    { name: "Scotland", country: uk._id },
    { name: "Quebec", country: canada._id },
    { name: "Queensland", country: australia._id },
  ]);

  // Cities (15+ total)
  await City.insertMany([
    // India
    { name: "Mumbai", state: maharashtra._id },
    { name: "Pune", state: maharashtra._id },
    { name: "New Delhi", state: delhi._id },

    // USA
    { name: "Los Angeles", state: california._id },
    { name: "San Francisco", state: california._id },
    { name: "Houston", state: texas._id },

    // Canada
    { name: "Toronto", state: ontario._id },
    { name: "Ottawa", state: ontario._id },
    { name: "Vancouver", state: britishColumbia._id },
    { name: "Quebec City", state: quebec._id },

    // Germany
    { name: "Munich", state: bavaria._id },

    // Australia
    { name: "Sydney", state: nsw._id },
    { name: "Brisbane", state: queensland._id },

    // Japan
    { name: "Tokyo", state: tokyo._id },

    // France
    { name: "Paris", state: ileDeFrance._id },

    // Brazil
    { name: "São Paulo City", state: saoPaulo._id },

    // UAE
    { name: "Dubai", state: dubaiEmirate._id },

    // UK
    { name: "Edinburgh", state: scotland._id },
  ]);

  console.log("✅ Seeded 10 countries, 15 states, and 18 cities.");
  process.exit();
};

seed().catch((err) => {
  console.error("❌ Seeding error:", err);
  process.exit(1);
});
