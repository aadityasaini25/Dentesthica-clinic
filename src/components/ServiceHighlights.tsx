import Image from "next/image";

const implantServices = [
  {
    title: "Single Tooth Implant",
    image: "/images/implant/single.png",
    description: "Titanium implant with porcelain crown — looks & feels like a natural tooth.",
    benefits: ["Preserves surrounding teeth", "99% success rate", "Starting from ₹25,000"],
  },
  {
    title: "All-on-4 / All-on-6",
    image: "/images/implant/all_in.png",
    description: "Full arch on 4–6 implants. Complete set of fixed teeth in a single visit.",
    benefits: ["Full mouth in one day", "No bone grafting needed", "Permanent fixed prosthesis"],
  },
];

const perioServices = [
  {
    title: "Scaling & Root Planing",
    image: "/images/perio/scaling-rootplaning.jpg",
    description: "Deep cleaning below the gumline to remove tartar & bacterial toxins from root surfaces.",
    benefits: ["Halts gum disease progression", "Reduces pocket depth", "Prevents tooth loss"],
  },
  {
    title: "Laser Gum Surgery",
    image: "/images/perio/laser-gum.jpg",
    description: "Precision gum contouring to fix gummy smile or expose tooth for crown placement.",
    benefits: ["Minimally invasive laser", "Faster healing time", "Fix gummy smile"],
  },
];

function ServiceCard({
  service,
  accentDot,
}: {
  service: (typeof implantServices)[0];
  accentDot: string;
}) {
  return (
    <div className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl flex flex-col md:flex-row group overflow-hidden transition-all duration-500 backdrop-blur-sm card-3d-subtle"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative aspect-[16/10] md:w-[150px] md:h-auto overflow-hidden m-2 rounded-xl shrink-0 bg-black/20">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 150px"
        />
        {/* 3D shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="px-4 py-3 flex flex-col justify-center flex-grow">
        <h3 className="font-bold mb-1.5 text-[15px] md:text-base text-white tracking-tight transition-colors leading-tight">
          {service.title}
        </h3>
        <p className="text-[11px] md:text-[12px] text-gray-400 leading-relaxed mb-2.5 line-clamp-2 md:line-clamp-none">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {service.benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${accentDot} shadow-sm`} />
              <span className="text-[10px] md:text-[11px] text-gray-300 whitespace-nowrap">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServiceHighlights() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f2b45] via-[#0f2b45] to-[#0a1e33] text-white py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* 3D Background glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#2a7ab5]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[150px] h-[150px] shape-3d-ring float-3d-slow pointer-events-none" style={{ borderColor: 'rgba(91, 184, 212, 0.08)' }} />
      <div className="absolute bottom-20 left-10 w-[80px] h-[80px] shape-3d-ring float-3d pointer-events-none" style={{ borderColor: 'rgba(232, 168, 124, 0.08)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── IMPLANTOLOGIST ── */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5bb8d4]/10 border border-[#5bb8d4]/20 mb-2 shadow-sm shadow-[#5bb8d4]/10">
                <span className="text-xs">🦷</span>
                <p className="text-[#5bb8d4] font-semibold text-[10px] uppercase tracking-[0.2em]">Implantologist</p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">Teeth Replacement Expert</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#5bb8d4] to-transparent rounded-full" />
            </div>
            <p className="hidden md:block text-gray-400 max-w-[320px] text-[11px] leading-relaxed text-right italic">
              &ldquo;Major Dr. Vipin uses 3D-guided implant surgery with 15 years of expertise.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 perspective-1000">
            {implantServices.map((service, index) => (
              <ServiceCard key={index} service={service} accentDot="bg-[#5bb8d4]" />
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 py-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#5bb8d4]/30 shadow-sm shadow-[#5bb8d4]/20" />
            <span className="text-white/15 text-[10px] uppercase tracking-[0.4em] font-bold whitespace-nowrap">Dual Specialization</span>
            <div className="w-2 h-2 rounded-full bg-[#e8a87c]/30 shadow-sm shadow-[#e8a87c]/20" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── PERIODONTIST ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8a87c]/10 border border-[#e8a87c]/20 mb-2 shadow-sm shadow-[#e8a87c]/10">
                <span className="text-xs">🩺</span>
                <p className="text-[#e8a87c] font-semibold text-[10px] uppercase tracking-[0.2em]">Periodontist</p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">Gum Disease &amp; Surgery Expert</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#e8a87c] to-transparent rounded-full" />
            </div>
            <p className="hidden md:block text-gray-400 max-w-[320px] text-[11px] leading-relaxed text-right italic">
              &ldquo;Specialist Periodontist treating all stages of gum disease.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 perspective-1000">
            {perioServices.map((service, index) => (
              <ServiceCard key={index} service={service} accentDot="bg-[#e8a87c]" />
            ))}
          </div>
        </div>

        {/* ── TRUST BAR - 3D stats ── */}
        <div className="mt-8 pt-8 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 perspective-1000">
            {[
              { value: "15+", label: "Years Experience", color: "text-[#5bb8d4]" },
              { value: "₹25K", label: "Implants From", color: "text-[#5bb8d4]" },
              { value: "3D", label: "Guided Surgery", color: "text-[#e8a87c]" },
              { value: "95%+", label: "Success Rate", color: "text-[#5bb8d4]" },
            ].map((stat, i) => (
              <div key={i} className="text-center group card-3d-subtle p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className={`text-2xl md:text-3xl font-bold ${stat.color} leading-none mb-1.5`}>
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-semibold whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
