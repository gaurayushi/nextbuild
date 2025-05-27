import { useState } from "react";
import Step1 from "./Step1_PersonalInfo";
import Step2 from "./Step2_Professional";
import Step3 from "./Step3_Preference";
import Step4 from "./Step4_Summary";
import Step5 from "./Step5_Submit";
import AppLayout from "../components/AppLayout";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    username: "",
    currentPassword: "",
    newPassword: "",
    gender: "",
    customGender: "",
    profession: "",
    companyName: "",
    addressLine1: "",
    country: "",
    state: "",
    city: "",
    subscription: "Basic",
    newsletter: true,
    dob: ""
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />,
    <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />,
    <Step4 formData={formData} nextStep={nextStep} prevStep={prevStep} />,
    <Step5 />,
  ];

  return <AppLayout step={step}>{steps[step]}</AppLayout>;
}