interface HowItWorksProps {
  onBookAppointment: () => void;
}

const steps = [
  {
    number: "1",
    title: "Book",
    description: "Fill the form or call us. We'll confirm your slot within 2 hours.",
    icon: "📅",
  },
  {
    number: "2",
    title: "Visit",
    description: "Free consultation with Dr. Vipin Kumar. Get a complete examination & treatment plan.",
    icon: "🦷",
  },
  {
    number: "3",
    title: "Smile",
    description: "Get your treatment done with the latest equipment. Walk out with a confident smile.",
    icon: "😄",
  },
];

export default function HowItWorks({ onBookAppointment }: HowItWorksProps) {
  return (
    <section className="py-14 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#2a7ab5] font-semibold text-xs uppercase tracking-[0.2em] mb-2">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            3 Simple Steps to Your New Smile
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#2a7ab5]/30 to-[#2a7ab5]/10" />
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#f0f5fa] mb-3 md:mb-4 text-2xl md:text-3xl">
                {step.icon}
              </div>
              <div className="inline-block bg-[#2a7ab5] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wider">
                Step {step.number}
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#2a7ab5] text-white py-3 px-8 rounded-full font-bold text-sm hover:bg-[#1a5a8c] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Start with Step 1 — Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
