
interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-20 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">

      {/* ── ABOVE THE FOLD: Headline + CTA + Offer ── */}
      <div className="text-center mb-8 md:mb-10">
        <p className="text-[#2a7ab5] font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
          Dentesthica — GK-1, New Delhi
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.15]">
          Replace Missing Teeth.<br className="hidden md:block" />
          <span className="text-gradient-teal">Restore Healthy Gums.</span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-6">
          15-year specialist in dental implants & gum treatments. World-class clinic, latest equipment, painless procedures.
        </p>

        {/* Primary CTA — above the fold */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-lg mx-auto mb-6">
          <button
            onClick={onBookAppointment}
            className="bg-[#2a7ab5] text-white py-3.5 px-8 rounded-full font-bold text-base shadow-lg shadow-blue-500/20 hover:bg-[#1a5a8c] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Book Free Consultation
          </button>
          <a
            href="tel:+918851202080"
            className="bg-white text-[#2a7ab5] border-2 border-[#2a7ab5]/20 py-3.5 px-8 rounded-full font-bold text-base text-center hover:bg-blue-50 transition-all w-full sm:w-auto"
          >
            Call +91 88512 02080
          </a>
        </div>

        {/* Social proof micro-bar */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="text-[#d4af37]">★★★★★</span>
          <span className="font-medium">4.9 rating</span>
          <span className="text-gray-300">|</span>
          <span>15+ years experience</span>
          <span className="text-gray-300">|</span>
          <span>Mon–Sat, 10 AM–7 PM</span>
        </div>
      </div>

      {/* ── OFFER BADGE + VIDEO + SPECIALIZATIONS ── */}
      <div className="md:flex md:items-center md:justify-center md:gap-12 max-w-5xl mx-auto">

        {/* Left: Video + Offer */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          {/* Offer badge */}
          <div className="bg-white/80 backdrop-blur-md border border-[#2a7ab5]/20 px-5 py-3 rounded-2xl shadow-lg shadow-blue-500/10 flex items-center gap-4 mb-5 w-full max-w-[320px]">
            <div className="bg-[#2a7ab5]/10 p-2.5 rounded-xl shrink-0">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <p className="text-[9px] text-[#2a7ab5] font-black uppercase tracking-[0.15em]">Premium Dental Implants</p>
              <p className="text-gray-900 font-black text-base leading-none">
                Starting at <span className="text-[#2a7ab5]">₹25,000</span>
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative rounded-2xl aspect-square w-[260px] md:w-[320px] overflow-hidden shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-blue-50/50">
            <div className="bg-black w-full h-full shimmer-effect">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero.png"
              >
                <source src="/videos/herovedio.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Right: Specializations card */}
        <div className="relative md:w-[420px]">
          <div className="glass-premium p-6 md:p-8 rounded-[24px] border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a7ab5] opacity-5 blur-3xl -mr-16 -mt-16" />
            <h2 className="text-sm font-bold text-[#1a3a5c] uppercase tracking-[0.15em] mb-5 border-b border-[#2a7ab5]/20 pb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#2a7ab5]" />
              Our Specializations
            </h2>
            <ul className="space-y-4 mb-8 text-sm text-gray-700 font-medium">
              {[
                "Advanced Dental Implants",
                "Periodontal (Gum) Treatments",
                "Full Mouth Rehabilitation",
                "Smile Makeover & Veneers",
                "Laser Dentistry"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2a7ab5] group-hover:scale-150 transition-transform duration-300" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#1a3a5c] text-white px-5 py-4 rounded-xl text-sm font-bold hover:bg-[#0d2840] transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Book Your Consultation — It&apos;s Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
