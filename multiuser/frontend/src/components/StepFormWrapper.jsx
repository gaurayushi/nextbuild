export default function StepFormWrapper({ children }) {
  return (
    <div className="flex-1 flex justify-center items-start md:items-center px-4 sm:px-6 py-8 md:py-12">
      <div
        className="w-full max-w-xl min-h-[550px]
        bg-gradient-to-br from-[#0f172a]/90 via-[#0e2133]/90 to-[#1a1a2e]/90
        backdrop-blur-lg border border-white/10 shadow-2xl
        p-6 md:p-10 rounded-[2.5rem] ring-1 ring-white/10 transition-all duration-300 relative overflow-hidden"
        style={{
          clipPath: "polygon(0% 0%, 96% 0%, 100% 4%, 100% 100%, 4% 100%, 0% 96%)",
        }}
      >
        <div className="border-t border-white/10 mb-6" />
        <div className="space-y-5 text-[15px] leading-relaxed font-medium min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
