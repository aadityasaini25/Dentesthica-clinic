
interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-36 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#2a7ab5] to-transparent rounded-full" />
      </div>

      <div className="text-center mb-10 md:mb-12 fade-up">
        <p className="text-[#2a7ab5] font-semibold text-sm uppercase tracking-[0.2em] mb-4">Dentesthica – Periodontist & Implantologist</p>

        <div className="inline-block mb-10 fade-up" style={{ animationDelay: '200ms' }}>
          <div className="bg-white/80 backdrop-blur-md border border-[#2a7ab5]/20 px-8 py-4 rounded-[28px] shadow-2xl shadow-blue-500/10 flex items-center gap-5 hover:scale-105 transition-all duration-500 group">
            <div className="bg-[#2a7ab5]/10 p-3 rounded-2xl group-hover:bg-[#2a7ab5]/20 transition-colors">
              <span className="text-2xl">🦷</span>
            </div>
            <div className="text-left">
              <p className="text-[10px] text-[#2a7ab5] font-black uppercase tracking-[0.2em] mb-0.5">Premium Dental Implants</p>
              <h3 className="text-gray-900 font-black text-lg md:text-2xl leading-none">
                Implants starting at <span className="text-[#2a7ab5]">₹25,000</span>
              </h3>
              <p className="text-gray-500 font-medium text-[11px] md:text-sm mt-1">
                By a specialist with <span className="text-gray-900 font-bold">15 years experience</span>
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          Your Smile Deserves<br className="hidden md:block" />
          <span className="text-gradient-teal">the Best Care</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          World-class periodontics and implantology with the latest advanced equipment, delivered by a highly experienced specialist in the heart of GK-1, New Delhi.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-center md:gap-16 md:mb-12 max-w-5xl mx-auto fade-up stagger-1">
        <div className="relative rounded-3xl aspect-square w-[280px] md:w-[360px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-blue-50/50">
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
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="relative md:w-[450px] fade-up stagger-2">
          <div className="glass-premium p-8 md:p-12 rounded-[32px] border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a7ab5] opacity-5 blur-3xl -mr-16 -mt-16" />
            <h2 className="text-lg font-bold text-[#1a3a5c] uppercase tracking-[0.2em] mb-8 border-b border-[#2a7ab5]/20 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#2a7ab5]" />
              Our Specializations
            </h2>
            <ul className="space-y-6 mb-12 text-[15px] text-gray-700 font-medium">
              {[
                "Advanced Dental Implants",
                "Periodontal (Gum) Treatments",
                "Full Mouth Rehabilitation",
                "Smile Makeover & Veneers",
                "Laser Dentistry"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-[#2a7ab5] group-hover:scale-150 transition-transform duration-300" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[#1a3a5c] text-white px-6 py-5 rounded-2xl text-base font-bold hover:bg-[#0d2840] transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mt-12 md:mt-20 fade-up stagger-3">
        <button
          onClick={onBookAppointment}
          className="bg-[#2a7ab5] text-white py-4 px-12 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-[#1a5a8c] transition-all hover:scale-105 active:scale-95 md:min-w-[240px]"
        >
          Book Appointment
        </button>
        <a
          href="tel:+918851202080"
          className="bg-white text-[#2a7ab5] border-2 border-[#2a7ab5]/30 py-4 px-12 rounded-2xl font-bold text-lg text-center hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 md:min-w-[240px]"
        >
          Call +91 88512 02080
        </a>
      </div>
    </section>
  );
}
