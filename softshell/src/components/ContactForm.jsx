import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl w-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl transition-all"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center tracking-tight">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "company"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-1 capitalize">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full bg-black/30 border border-white/20 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              {errors[field] && (
                <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label htmlFor="licenseType" className="block text-sm font-medium text-gray-300 mb-1">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full bg-black/30 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 border border-white/20"
            >
              <option value="">Select License Type</option>
              <option value="Windows">Windows</option>
              <option value="Microsoft Office">Microsoft Office</option>
              <option value="Adobe">Adobe</option>
              <option value="Antivirus">Antivirus</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-400 text-sm mt-1">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full bg-black/30 border border-white/20 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-green-400/40"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
