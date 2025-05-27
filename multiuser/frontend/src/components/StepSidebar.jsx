import {
  FaUser,
  FaBriefcase,
  FaMapMarkedAlt,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
const steps = [
  { label: "Personal Info", icon: <FaUser /> },
  { label: "Professional Details", icon: <FaBriefcase /> },
  { label: "Preferences", icon: <FaMapMarkedAlt /> },
  { label: "Review & Confirm", icon: <FaClipboardCheck /> },
  { label: "Complete", icon: <FaCheckCircle /> },
];
export default function StepSidebar({ currentStep }) {
  return (
    <div className="w-full md:w-64 bg-[#0f172a] p-6 flex flex-col pt-6 md:pt-10 text-white transition-all duration-500 ">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <FaUserPlus className="text-2xl text-green-400" />
        <h2 className="text-lg md:text-xl font-bold tracking-tight">Profile Setup</h2>
      </div>

      <p className="text-sm text-gray-400 mb-8 md:ml-[34px]">Let’s build your profile</p>

      <div className="relative pl-6">
        {/* Progress line */}
        <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-700 z-0 overflow-hidden">
          <div
            className="absolute left-0 top-0 w-full bg-green-400 transition-all duration-500 ease-in-out"
            style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>

        <ul className="flex flex-col gap-8 relative z-10">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <li
                key={index}
                className={`relative flex items-start gap-4 group transition-all duration-300 ${
                  isActive ? "scale-[1.03]" : ""
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-base font-semibold border-2 transition-all duration-300
                    ${
                      isActive
                        ? "border-green-400 bg-green-400 text-black shadow-green-400/50"
                        : isCompleted
                        ? "border-green-700 bg-green-600 text-white shadow-green-700/40"
                        : "border-gray-600 bg-[#1e293b] text-gray-400 group-hover:scale-110"
                    }`}
                >
                  {step.icon}
                </div>

                <div>
                  <p
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-green-300"
                        : isCompleted
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    {step.label}
                  </p>
                  <span className="text-xs text-gray-500">Step {index + 1}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
