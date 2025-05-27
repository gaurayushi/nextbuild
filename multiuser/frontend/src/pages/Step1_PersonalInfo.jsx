import { useState } from "react";
import {
  validateUsername,
  isValidPassword,
  isImageFile,
  isFileSizeValid,
} from "../utils/validations";
import { checkUsername } from "../services/api";
import { toast } from "react-toastify";
import {
  FaEye,
  FaEyeSlash,
  FaMars,
  FaVenus,
  FaGenderless,
} from "react-icons/fa";

export default function Step1_PersonalInfo({ formData, setFormData, nextStep }) {
  const [preview, setPreview] = useState(null);
  const [usernameStatus, setUsernameStatus] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showCustomGender, setShowCustomGender] = useState(formData.gender === "Other");
  const [showPassword, setShowPassword] = useState(false);

  const inputClass =
    "w-full px-3 py-1.5 bg-white/10 text-white placeholder-gray-400 border border-white/10 " +
    "rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition";

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!isImageFile(file)) return toast.error("Only JPG or PNG allowed");
    if (!isFileSizeValid(file)) return toast.error("Max 2MB allowed");
    setPreview(URL.createObjectURL(file));
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleUsernameChange = async (e) => {
    const username = e.target.value;
    setFormData({ ...formData, username });
    if (!validateUsername(username)) {
      setUsernameStatus("Invalid");
      return;
    }
    const available = await checkUsername(username);
    setUsernameStatus(available ? "Available" : "Taken");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, newPassword: value });
    const strength = isValidPassword(value) ? 100 : 40;
    setPasswordStrength(strength);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, gender: value, customGender: "" });
    setShowCustomGender(value === "Other");
  };

  const handleSubmit = () => {
    const { profilePhoto, username, newPassword, gender, customGender } = formData;

    if (!profilePhoto || !username || !newPassword || !gender) {
      return toast.error("All fields are required");
    }

    if (gender === "Other" && !customGender) {
      return toast.error("Please specify your gender");
    }

    if (usernameStatus !== "Available") {
      return toast.error("Username must be valid and available");
    }

    nextStep();
  };

  return (
    <div className="relative p-6 rounded-xl border border-green-400 text-xs text-white animate-neon-box shadow-neon space-y-5">
      <h2 className="text-lg font-bold text-green-300">Personal Information</h2>

      {/* Profile Picture Upload */}
      <div>
        <label className="block text-xs font-medium mb-1 text-green-200">Upload Profile Picture</label>
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="text-white file:mr-2 file:px-3 file:py-1 file:rounded-full file:border-0 file:bg-green-500/80 file:text-white hover:file:bg-green-400 transition"
          />
          {preview && (
            <div className="relative h-14 w-14">
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full object-cover rounded-full border-2 border-white shadow-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Username */}
      <div>
        <label className="block mb-1 text-green-200">Username</label>
        <input
          type="text"
          className={inputClass}
          placeholder="e.g. johndoe"
          value={formData.username || ""}
          onChange={handleUsernameChange}
        />
        {usernameStatus && (
          <p className={`text-[10px] mt-1 ${usernameStatus === "Available" ? "text-green-400" : "text-red-400"}`}>
            {usernameStatus}
          </p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className="block mb-1 text-green-200">Gender</label>
        <select
          value={formData.gender || ""}
          onChange={handleGenderChange}
          className={`${inputClass} appearance-none`}
          style={{
            backgroundColor: "#1e293b",
            color: "white",
            borderColor: "#334155",
          }}
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {formData.gender && (
          <div className="flex items-center gap-2 mt-1 text-gray-300 text-xs">
            {formData.gender === "Male" && <FaMars className="text-blue-400" />}
            {formData.gender === "Female" && <FaVenus className="text-pink-400" />}
            {formData.gender === "Other" && <FaGenderless className="text-purple-400" />}
            <span>{formData.gender}</span>
          </div>
        )}
      </div>

      {/* Custom Gender */}
      {showCustomGender && (
        <div>
          <label className="block mb-1 text-green-200">Please specify</label>
          <input
            type="text"
            value={formData.customGender || ""}
            onChange={(e) => setFormData({ ...formData, customGender: e.target.value })}
            className={inputClass}
          />
        </div>
      )}

      {/* Password */}
      <div>
        <label className="block mb-1 text-green-200">New Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className={`${inputClass} pr-8`}
            placeholder="••••••••"
            value={formData.newPassword || ""}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1.5 text-white hover:text-green-300"
          >
            {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
          </button>
        </div>
        <div className="w-full h-1 bg-gray-700 rounded mt-1">
          <div
            className={`h-full transition-all ${passwordStrength === 100 ? "bg-green-400" : "bg-yellow-400"}`}
            style={{ width: `${passwordStrength}%` }}
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-3">
        <button
          onClick={handleSubmit}
          className="px-5 py-1.5 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300 transition text-xs"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
