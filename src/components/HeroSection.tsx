interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-20 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-visible">
      {/* 3D decorative elements */}
      <div className="absolute top-16 right-10 w-[300px] h-[300px] shape-3d-sphere float-3d opacity-30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 left-0 w-[60px] h-[60px] shape-3d-cube float-3d-delayed opacity-20 pointer-events-none hidden md:block" />

      {/* ── ABOVE THE FOLD ── */}
      <div className="text-center mb-8 md:mb-12 relative z-10">
        <div className="section-badge mb-4 mx-auto w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a7ab5] animate-pulse" />
          Dentesthica — GK-1, New Delhi
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-gray-900 mb-5 leading-[1.12]">
          Replace Missing Teeth.<br className="hidden md:block" />
          <span className="text-gradient-teal">Restore Oral Health.</span>
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light mb-8">
          15-year specialist in dental implants &amp; gum treatments. World-class clinic, latest equipment, painless procedures.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-lg mx-auto mb-8">
          <button
            onClick={onBookAppointment}
            className="btn-primary py-3.5 px-8 text-base w-full sm:w-auto"
          >
            Book Consultation
          </button>
          <a
            href="tel:+918851202080"
            className="bg-white text-[#2a7ab5] border-2 border-[#2a7ab5]/15 py-3.5 px-8 rounded-full font-bold text-base text-center hover:bg-[#2a7ab5]/5 hover:border-[#2a7ab5]/30 transition-all w-full sm:w-auto shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Call +91 88512 02080
          </a>
        </div>

        {/* Social proof bar with 3D depth */}
        <div className="inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-full shadow-3d inner-glow">
          <span className="text-[#d4af37] text-sm">★★★★★</span>
          <span className="font-semibold text-sm text-gray-700">4.9 rating</span>
          <span className="w-px h-4 bg-gray-200" />
          <span className="text-sm text-gray-500">15+ years exp.</span>
          <span className="hidden sm:inline w-px h-4 bg-gray-200" />
          <span className="hidden sm:inline text-sm text-gray-500">Mon–Sat</span>
        </div>
      </div>

      {/* ── VIDEO + SPECIALIZATIONS ── */}
      <div className="md:flex md:items-center md:justify-center md:gap-12 max-w-5xl mx-auto perspective-1500">

        {/* Left: Video + Offer */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 preserve-3d">
          {/* Offer badge - 3D floating */}
          <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-4 mb-5 w-full max-w-[340px] card-3d-subtle inner-glow">
            <div className="bg-gradient-to-br from-[#2a7ab5]/15 to-[#2a7ab5]/5 p-3 rounded-xl shrink-0 shadow-sm">
              <span className="text-xl">🦷</span>
            </div>
            <div>
              <p className="text-[9px] text-[#2a7ab5] font-black uppercase tracking-[0.15em]">Lifetime Warranty Dental Implants</p>
              <p className="text-gray-900 font-black text-base leading-tight mt-0.5">
                Just <span className="text-[#2a7ab5]">₹20,000/-</span><span className="text-[10px] align-top">*</span>
              </p>
            </div>
          </div>

          {/* Video with 3D depth */}
          <div className="relative rounded-3xl aspect-square w-[260px] md:w-[320px] overflow-hidden shadow-3d-teal group card-3d">
            <div className="absolute inset-0 rounded-3xl ring-4 ring-white/80 ring-offset-2 ring-offset-blue-50/50 z-10 pointer-events-none" />
            <div className="bg-black w-full h-full rounded-3xl overflow-hidden">
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero.png"
              >
                <source src="/videos/herovedio.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/20 via-transparent to-transparent pointer-events-none rounded-3xl" />
          </div>
        </div>

        {/* Right: Specializations card with 3D */}
        <div className="relative md:w-[420px] preserve-3d">
          <div className="glass-card p-6 md:p-8 rounded-[24px] relative overflow-hidden card-3d shadow-3d inner-glow">
            {/* 3D glow orb */}
            <div className="absolute top-0 right-0 w-40 h-40 shape-3d-sphere opacity-30 -mr-10 -mt-10" />

            <h2 className="text-sm font-bold text-[#1a3a5c] uppercase tracking-[0.15em] mb-5 border-b border-gray-100 pb-3 flex items-center gap-2 relative z-10">
              <span className="w-6 h-px bg-gradient-to-r from-[#2a7ab5] to-transparent" />
              Our Specializations
            </h2>
            <ul className="space-y-4 mb-8 text-sm text-gray-700 font-medium relative z-10">
              {[
                "Advanced Dental Implants",
                "Periodontal (Gum) Treatments",
                "Full Mouth Rehabilitation",
                "Smile Makeover & Veneers",
                "Laser Dentistry",
                "Guaranteed Zoom Teeth Whitening in 45 mins",
                "Painless Root Canal Treatment",
                "Crowns & Bridges"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group/item">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] shadow-sm shadow-[#2a7ab5]/30 group-hover/item:scale-150 group-hover/item:shadow-md group-hover/item:shadow-[#2a7ab5]/40 transition-all duration-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-gradient-to-r from-[#1a3a5c] to-[#0d2840] text-white px-5 py-4 rounded-xl text-sm font-bold transition-all active:scale-[0.98] relative z-10 shadow-3d-dark hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(26,58,92,0.4)]"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
