import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Step2_Professional({ formData, setFormData, nextStep, prevStep }) {
  const [showCompany, setShowCompany] = useState(formData.profession === "Entrepreneur");

  useEffect(() => {
    setShowCompany(formData.profession === "Entrepreneur");
  }, [formData.profession]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid = () => {
    const { profession, address1, companyName } = formData;
    if (!profession || !address1?.trim()) return false;
    if (profession === "Entrepreneur" && !companyName?.trim()) return false;
    return true;
  };

  const handleSubmit = () => {
    if (!isValid()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    nextStep();
  };

  return (
    <div className="relative p-6 rounded-xl border border-green-400 text-sm text-white animate-neon-box shadow-neon space-y-6">
      <h2 className="text-xl font-bold text-green-300">Professional Details</h2>

      {/* Profession */}
      <div>
        <label className="block mb-1 text-green-200">Profession</label>
        <select
          value={formData.profession || ""}
          onChange={(e) => handleChange("profession", e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select</option>
          <option value="Student">Student</option>
          <option value="Developer">Developer</option>
          <option value="Entrepreneur">Entrepreneur</option>
        </select>
      </div>

      {/* Company Name */}
      {showCompany && (
        <div>
          <label className="block mb-1 text-green-200">
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.companyName || ""}
            onChange={(e) => handleChange("companyName", e.target.value)}
            placeholder="e.g. WebTech Inc."
            className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white"
          />
        </div>
      )}

      {/* Address Line 1 */}
      <div>
        <label className="block mb-1 text-green-200">
          Address Line 1 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={formData.address1 || ""}
          onChange={(e) => handleChange("address1", e.target.value)}
          placeholder="e.g. 123 Main Street"
          className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white"
        />
      </div>

      {/* Subscription Plan */}
      <div>
        <label className="block mb-1 text-green-200">Subscription Plan</label>
        <div className="flex gap-6">
          {["Basic", "Pro", "Enterprise"].map((plan) => (
            <label key={plan} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="subscriptionPlan"
                value={plan}
                checked={formData.subscriptionPlan === plan}
                onChange={(e) => handleChange("subscriptionPlan", e.target.value)}
              />
              {plan}
            </label>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.newsletter ?? true}
          onChange={(e) => handleChange("newsletter", e.target.checked)}
        />
        <label className="text-green-200">Subscribe to newsletter</label>
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
          disabled={!isValid()}
          className={`px-6 py-2 font-semibold rounded-full ${
            !isValid()
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
