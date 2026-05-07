import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

const credentials = [
  { short: "BDS", full: "Bachelor of Dental Surgery" },
  { short: "MDS", full: "Master of Dental Surgery" },
  { short: "FICD (USA)", full: "Fellow, Intl. College of Dentists" },
  { short: "FPFA (USA)", full: "Fellow, Pierre Fauchard Academy" },
];

const stats = [
  { value: "15+", label: "Years of Practice" },
  { value: "5,000+", label: "Smiles Restored" },
  { value: "98%", label: "Patient Satisfaction" },
];

const highlights = [
  "Specialist in advanced dental implants",
  "Expert in full mouth rehabilitation",
  "Advanced laser dentistry practitioner",
  "Trained in international protocols",
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
      <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 0l2.5 7.5L20 10l-7.5 2.5L10 20l-2.5-7.5L0 10l7.5-2.5z" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
    </div>
  );
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8fafc] to-white py-24 md:py-32 overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] shape-3d-sphere float-3d-slow opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[260px] h-[260px] shape-3d-sphere float-3d opacity-15 pointer-events-none" />
      <div
        className="absolute top-32 left-[28%] w-[80px] h-[80px] float-3d-delayed opacity-30 pointer-events-none hidden lg:block"
        style={{
          background: "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.04))",
          border: "1px solid rgba(212,175,55,0.18)",
          borderRadius: "20px",
          transform: "rotate(15deg)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-10 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Ornament />
          <div className="section-badge mb-4 mx-auto w-fit" style={{ borderColor: "rgba(212,175,55,0.3)", color: "#a8862a", background: "rgba(212,175,55,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            Our Distinguished Specialist
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-5 font-poppins">
            A Legacy of <span className="text-gradient-gold">Precision</span>,
            <br className="hidden md:block" />
            <span className="text-gradient-teal"> Powered by Experience</span>
          </h2>
          <p className="mt-6 text-gray-500 text-base md:text-lg font-light leading-relaxed">
            Where surgical mastery meets the art of restoration — trusted by thousands
            for transformative periodontal and implant care.
          </p>
        </div>

        {/* Main showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch perspective-1500">
          {/* LEFT — Premium Portrait */}
          <div className="lg:col-span-5 flex justify-center preserve-3d">
            <div className="relative w-full max-w-md">
              {/* Outer gold-ring frame */}
              <div
                className="relative rounded-[36px] p-[2px] card-3d"
                style={{
                  background:
                    "linear-gradient(135deg, #d4af37 0%, #f0d060 25%, #2a7ab5 60%, #1a3a5c 100%)",
                  boxShadow:
                    "0 20px 60px -15px rgba(26,58,92,0.25), 0 30px 90px -20px rgba(212,175,55,0.18)",
                }}
              >
                <div className="relative aspect-[4/5] rounded-[34px] overflow-hidden bg-white">
                  <Image
                    src="/images/doctor/dr-vipin-kumar.jpg"
                    alt="Major Dr. Vipin K. Sharma"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                </div>
              </div>

              {/* Floating "15+ Years" medallion */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center text-center float-3d shadow-3d-dark"
                style={{
                  background:
                    "conic-gradient(from 180deg, #1a3a5c, #2a7ab5, #d4af37, #1a3a5c)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0d2840] flex flex-col items-center justify-center">
                  <span className="text-[10px] text-[#d4af37] font-bold tracking-[0.2em] uppercase">
                    Since
                  </span>
                  <span className="text-3xl font-black text-white leading-none">
                    15<span className="text-[#d4af37]">+</span>
                  </span>
                  <span className="text-[9px] text-white/70 font-semibold tracking-wider uppercase">
                    Years
                  </span>
                </div>
              </div>

              {/* Floating award badge */}
              <div
                className="hidden md:flex absolute -top-5 -left-5 items-center gap-2 px-4 py-2.5 rounded-full glass-card shadow-3d float-3d-delayed"
                style={{ border: "1px solid rgba(212,175,55,0.4)" }}
              >
                <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1l2.6 5.5 6 .9-4.3 4.2 1 6L10 14.9 4.6 17.6l1-6L1.4 7.4l6-.9L10 1z" />
                </svg>
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#1a3a5c]">
                  Top-Rated 2024
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Info panel */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Name */}
            <h3 className="text-center lg:text-left text-3xl md:text-4xl lg:text-[2.75rem] font-black text-gray-900 mb-2 tracking-tight leading-[1.1] font-poppins">
              Major Dr. Vipin <span className="text-gradient-teal">K. Sharma</span>
            </h3>

            {/* Title with gold underline */}
            <div className="text-center lg:text-left mb-3">
              <p className="text-[#2a7ab5] font-bold text-sm md:text-base uppercase tracking-[0.2em]">
                Consultant Periodontist & Oral Implantologist
              </p>
              <p className="text-[#a8862a] font-bold text-xs md:text-sm uppercase tracking-[0.22em] mt-1.5">
                Graded Specialist · AFMC
              </p>
              <div className="hidden lg:block h-0.5 w-20 mt-2 rounded-full bg-gradient-to-r from-[#d4af37] via-[#2a7ab5] to-transparent" />
              <div className="lg:hidden flex justify-center mt-2">
                <div className="h-0.5 w-20 rounded-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              </div>
            </div>

            {/* Credentials pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7">
              {credentials.map((c, i) => (
                <div
                  key={c.short}
                  className="group/cred relative px-4 py-2 rounded-full text-xs font-bold text-[#1a3a5c] cursor-default transition-all hover:-translate-y-0.5 fade-up"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.14), rgba(212,175,55,0.04))",
                    border: "1px solid rgba(212,175,55,0.4)",
                    boxShadow:
                      "0 2px 8px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <span className="relative z-10">{c.short}</span>
                  {/* Tooltip */}
                  <span className="absolute left-1/2 -translate-x-1/2 -top-9 px-3 py-1 rounded-md text-[10px] font-semibold text-white bg-[#1a3a5c] whitespace-nowrap opacity-0 group-hover/cred:opacity-100 pointer-events-none transition-opacity shadow-lg">
                    {c.full}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-4 text-center inner-glow card-3d-subtle"
                >
                  <div className="text-2xl md:text-3xl font-black text-gradient-teal leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-gray-500 font-semibold uppercase tracking-wider leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio with drop cap */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-center lg:text-left">
              <span
                className="float-left mr-2 mt-1 text-5xl font-black leading-none text-gradient-gold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                A
              </span>
              Graded Specialist (AFMC) with over 15 years of clinical mastery,
              Major Dr. Vipin K. Sharma combines surgical precision with a refined aesthetic
              sensibility — delivering implant, periodontal, and full-mouth restorations
              that look natural and last a lifetime.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 fade-up"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="w-5 h-5 mt-0.5 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #d4af37, #c9a227)",
                      boxShadow: "0 2px 6px rgba(212,175,55,0.35)",
                    }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 font-medium leading-tight">
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature quote */}
            <div className="relative mb-8 px-5 py-4 rounded-2xl border-l-4 border-[#d4af37]" style={{ background: "rgba(212,175,55,0.05)" }}>
              <svg className="absolute top-2 right-3 w-6 h-6 text-[#d4af37]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 7c-2.5 0-4.5 2-4.5 4.5S7 16 9.5 16v-3c-1 0-1.5-.5-1.5-1.5S8.5 10 9.5 10V7zm9 0c-2.5 0-4.5 2-4.5 4.5S16 16 18.5 16v-3c-1 0-1.5-.5-1.5-1.5S17.5 10 18.5 10V7z" />
              </svg>
              <p className="text-gray-700 text-sm md:text-[15px] italic leading-relaxed">
                &ldquo;Every smile I restore carries the discipline of a soldier
                and the soul of a craftsman.&rdquo;
              </p>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#a8862a] mt-2">
                — Major Dr. Vipin K. Sharma
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={onBookAppointment}
                className="btn-primary py-4 px-8 text-sm shimmer-effect"
              >
                Book Consultation with Dr. Vipin K. Sharma
              </button>
              <a
                href="tel:+918851202080"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm border-2 border-[#d4af37]/40 text-[#a8862a] bg-white/60 backdrop-blur hover:bg-[#d4af37]/10 hover:border-[#d4af37]/70 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 4.5a3 3 0 013-3h1.4c.86 0 1.6.6 1.8 1.4l1.1 4.4c.2.8-.1 1.6-.7 2L7.8 10.3c-.1.1-.2.2-.1.4a11.3 11.3 0 006.7 6.7c.1 0 .3 0 .4-.1l1-1.3c.4-.6 1.2-.9 2-.7l4.4 1.1c.8.2 1.4.96 1.4 1.8v1.4a3 3 0 01-3 3h-2.3C8.5 22.5 1.5 15.5 1.5 6.8V4.5z" />
                </svg>
                Call Directly
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
