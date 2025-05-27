import { useEffect, useState } from "react";
import { fetchCountries, fetchStates, fetchCities } from "../services/api";
import { toast } from "react-toastify";

export default function Step3_Preference({ formData, setFormData, nextStep, prevStep }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch(() => toast.error("Failed to load countries"));
  }, []);

  useEffect(() => {
    if (formData.country) {
      fetchStates(formData.country)
        .then(setStates)
        .catch(() => toast.error("Failed to load states"));
      setFormData((prev) => ({
        ...prev,
        state: "",
        city: "",
        stateName: "",
        cityName: ""
      }));
    }
  }, [formData.country]);

  useEffect(() => {
    if (formData.state) {
      fetchCities(formData.state)
        .then(setCities)
        .catch(() => toast.error("Failed to load cities"));
      setFormData((prev) => ({
        ...prev,
        city: "",
        cityName: ""
      }));
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      const selected = countries.find(c => c._id === value);
      setFormData(prev => ({
        ...prev,
        country: value,
        countryName: selected?.name || "",
        state: "",
        city: "",
        stateName: "",
        cityName: ""
      }));
    } else if (name === "state") {
      const selected = states.find(s => s._id === value);
      setFormData(prev => ({
        ...prev,
        state: value,
        stateName: selected?.name || "",
        city: "",
        cityName: ""
      }));
    } else if (name === "city") {
      const selected = cities.find(c => c._id === value);
      setFormData(prev => ({
        ...prev,
        city: value,
        cityName: selected?.name || ""
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!formData.country || !formData.state || !formData.city) {
      toast.error("Please select Country, State, and City.");
      return;
    }
    nextStep();
  };

  return (
    <div className="relative p-6 rounded-xl border border-green-400 text-sm text-white animate-neon-box shadow-neon space-y-6">
      <h2 className="text-xl font-bold text-green-300">Location Preferences</h2>

      {/* Country Dropdown */}
      <div>
        <label htmlFor="country" className="block mb-1 text-green-200">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-green-400"
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div>
        <label htmlFor="state" className="block mb-1 text-green-200">State</label>
        <select
          name="state"
          id="state"
          value={formData.state || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-green-400"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div>
        <label htmlFor="city" className="block mb-1 text-green-200">City</label>
        <select
          name="city"
          id="city"
          value={formData.city || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-green-400"
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-400"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={!formData.country || !formData.state || !formData.city}
          className={`px-6 py-2 font-semibold rounded-full ${
            !formData.country || !formData.state || !formData.city
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-green-400 hover:bg-green-300 text-black"
          }`}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
