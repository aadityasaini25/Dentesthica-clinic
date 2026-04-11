interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a3a5c] via-[#1a3a5c] to-[#0d2840] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* 3D floating orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] shape-3d-sphere float-3d-slow opacity-15 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] shape-3d-sphere float-3d opacity-10 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[60px] h-[60px] shape-3d-ring float-3d-delayed pointer-events-none" style={{ borderColor: 'rgba(212, 175, 55, 0.15)' }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-[#5bb8d4] text-xs font-semibold uppercase tracking-widest mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5bb8d4] animate-pulse shadow-sm shadow-[#5bb8d4]/50" />
          Limited Slots Available This Week
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
          Get Your Free<br className="hidden sm:block" /> Consultation Today
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Comprehensive evaluation by Dr. Vipin Kumar — 15 years experience. No obligation, no hidden charges.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookAppointment}
            className="btn-gold py-4 px-10 text-base w-full sm:w-auto"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:+918851202080"
            className="text-white/60 font-medium text-sm hover:text-white transition-colors flex items-center gap-2"
          >
            <span>📞</span> or call +91 88512 02080
          </a>
        </div>
      </div>
    </section>
  );
}
