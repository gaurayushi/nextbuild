export default function Step4_Summary({ formData, nextStep, prevStep }) {
  return (
    <div className="relative p-6 rounded-xl border border-green-400 text-sm text-white animate-neon-box shadow-neon space-y-6">
      <h2 className="text-xl font-bold text-green-300">Review Your Information</h2>
      <div className="space-y-2">
        <p><strong className="text-green-200">Username:</strong> {formData.username}</p>
        <p><strong className="text-green-200">Gender:</strong> {formData.gender === "Other" ? formData.customGender : formData.gender}</p>
        <p><strong className="text-green-200">Profession:</strong> {formData.profession}</p>
        {formData.profession === "Entrepreneur" && (
          <p><strong className="text-green-200">Company:</strong> {formData.companyName}</p>
        )}
        <p><strong className="text-green-200">Address:</strong> {formData.address1}</p>
        <p><strong className="text-green-200">Country:</strong> {formData.countryName}</p>
        <p><strong className="text-green-200">State:</strong> {formData.stateName}</p>
        <p><strong className="text-green-200">City:</strong> {formData.cityName}</p>
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={prevStep} className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-400">
          ← Back
        </button>
        <button onClick={nextStep} className="px-6 py-2 bg-green-400 text-black font-semibold rounded-full hover:bg-green-300">
          Submit →
        </button>
      </div>
    </div>
  );
}
