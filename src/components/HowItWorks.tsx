interface HowItWorksProps {
  onBookAppointment: () => void;
}

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Fill the form or call us. We'll confirm your slot within 2 hours.",
    icon: "📅",
    color: "from-[#2a7ab5] to-[#1a5a8c]",
    glow: "shadow-[#2a7ab5]/30",
  },
  {
    number: "02",
    title: "Visit",
    description: "Free consultation with Major Dr. Vipin. Complete examination & treatment plan.",
    icon: "🦷",
    color: "from-[#1a3a5c] to-[#0d2840]",
    glow: "shadow-[#1a3a5c]/30",
  },
  {
    number: "03",
    title: "Smile",
    description: "Get your treatment with latest equipment. Walk out with a confident smile.",
    icon: "😄",
    color: "from-[#d4af37] to-[#c9a227]",
    glow: "shadow-[#d4af37]/30",
  },
];

export default function HowItWorks({ onBookAppointment }: HowItWorksProps) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      {/* 3D floating shapes */}
      <div className="absolute top-10 right-10 w-[100px] h-[100px] shape-3d-ring float-3d-slow opacity-10 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-[80px] h-[80px] shape-3d-ring float-3d opacity-8 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-[160px] h-[160px] shape-3d-sphere float-3d-slow opacity-12 pointer-events-none -translate-x-1/2 hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-[50px] h-[50px] shape-3d-cube float-3d-delayed opacity-10 pointer-events-none hidden lg:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-badge mb-3 mx-auto w-fit">How It Works</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            3 Simple Steps to Your <span className="text-gradient-teal">New Smile</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 perspective-1500">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* 3D connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-[#2a7ab5]/20 to-transparent" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#2a7ab5]/15 shadow-sm shadow-[#2a7ab5]/20" />
                </div>
              )}

              {/* 3D icon container */}
              <div className={`inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${step.color} mb-5 text-3xl md:text-4xl shadow-2xl ${step.glow} card-3d-subtle inner-glow`}>
                {step.icon}
              </div>
              <div className={`inline-block bg-gradient-to-r ${step.color} text-white text-[10px] font-bold px-3.5 py-1 rounded-full mb-3 uppercase tracking-widest shadow-md ${step.glow}`}>
                Step {step.number}
              </div>
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Start with Step 1 — Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
