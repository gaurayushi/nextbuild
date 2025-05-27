import { FaCheckCircle } from "react-icons/fa";

export default function Step5_Submit() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className=" p-10 rounded-2xl  text-center  animate-fade-slide">
        <FaCheckCircle className="text-green-400 text-6xl mb-4 mx-auto drop-shadow-lg animate-bounce-in" />

        <h2 className="text-2xl font-bold text-white mb-2">Submission Complete</h2>
        <p className="text-gray-400 mb-6">
          Your profile has been submitted successfully. You will be notified once your information is reviewed.
        </p>

        <button className="mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold transition-all duration-300 shadow-md">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
