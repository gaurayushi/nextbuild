import StepSidebar from "./StepSidebar";
import StepFormWrapper from "./StepFormWrapper";
import ToastMessage from "./ToastMessage";
export default function AppLayout({ step, children }) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row text-white overflow-hidden">
      <StepSidebar currentStep={step} />
      <main className="flex-1 flex flex-col animate-fade-in">
        <StepFormWrapper>{children}</StepFormWrapper>
        <ToastMessage />
      </main>
    </div>
  );
}
