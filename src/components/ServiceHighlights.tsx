import Image from "next/image";

const implantServices = [
  {
    title: "Single Tooth Implant",
    image: "/images/implant/single.png",
    description:
      "Titanium implant with porcelain crown — looks & feels like a natural tooth.",
    benefits: [
      "Preserves surrounding teeth",
      "99% success rate",
      "Starting from ₹25,000",
    ],
    dark: true,
  },
  {
    title: "All-on-4 / All-on-6",
    image: "/images/implant/all_in.png",
    description:
      "Full arch on 4–6 implants. Complete set of fixed teeth in a single visit.",
    benefits: [
      "Full mouth in one day",
      "No bone grafting needed",
      "Permanent fixed prosthesis",
    ],
    dark: true,
  },
];

const perioServices = [
  {
    title: "Scaling & Root Planing",
    image: "/images/perio/scaling-rootplaning.jpg",
    description:
      "Deep cleaning below the gumline to remove tartar & bacterial toxins from root surfaces.",
    benefits: [
      "Halts gum disease progression",
      "Reduces pocket depth",
      "Prevents tooth loss",
    ],
    dark: false,
  },
  {
    title: "Laser Gum Surgery",
    image: "/images/perio/laser-gum.jpg",
    description:
      "Precision gum contouring to fix gummy smile or expose tooth for crown placement.",
    benefits: [
      "Minimally invasive laser",
      "Faster healing time",
      "Fix gummy smile",
    ],
    dark: false,
  },
];

function ServiceCard({
  service,
  darkBg,
}: {
  service: (typeof implantServices)[0];
  darkBg: boolean;
}) {
  return (
    <div
      className={`${
        darkBg
          ? "bg-white/[0.03] hover:bg-white/[0.06]"
          : "bg-white/[0.05] hover:bg-white/[0.08]"
      } border border-white/10 rounded-2xl flex flex-col md:flex-row group overflow-hidden transition-all duration-300 backdrop-blur-sm`}
    >
      <div
        className={`relative aspect-[16/10] md:w-[140px] md:h-auto overflow-hidden m-2 rounded-xl shrink-0 ${
          darkBg ? "bg-black/30" : "bg-black/20"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 140px"
        />
      </div>

      <div className="px-4 py-3 flex flex-col justify-center flex-grow">
        <h3
          className={`font-bold mb-1 text-[15px] md:text-base text-white tracking-tight transition-colors leading-tight ${
            darkBg ? "group-hover:text-[#5bb8d4]" : "group-hover:text-[#e8a87c]"
          }`}
        >
          {service.title}
        </h3>
        <p className="text-[11px] md:text-[12px] text-gray-400 leading-relaxed mb-2 line-clamp-2 md:line-clamp-none">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {service.benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className={`w-1 h-1 rounded-full ${
                  darkBg ? "bg-[#5bb8d4]" : "bg-[#e8a87c]"
                }`}
              />
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
    <section className="relative bg-[#0f2b45] text-white py-10 md:py-16 px-4 md:px-8">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#2a7ab5]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── IMPLANTOLOGIST ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs">🦷</span>
                <p className="text-[#5bb8d4] font-semibold text-[10px] uppercase tracking-[0.2em]">
                  Implantologist
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1.5">
                Teeth Replacement Expert
              </h2>
              <div className="w-10 h-0.5 bg-[#5bb8d4] rounded-full" />
            </div>
            <p className="hidden md:block text-gray-400 max-w-[320px] text-[11px] leading-relaxed text-right italic">
              "Dr. Vipin Kumar uses 3D-guided implant surgery with 15 years of expertise."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implantServices.map((service, index) => (
              <ServiceCard key={index} service={service} darkBg={true} />
            ))}
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 py-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold whitespace-nowrap">
            Dual Specialization
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── PERIODONTIST ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs">🩺</span>
                <p className="text-[#e8a87c] font-semibold text-[10px] uppercase tracking-[0.2em]">
                  Periodontist
                </p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1.5">
                Gum Disease & Surgery Expert
              </h2>
              <div className="w-10 h-0.5 bg-[#e8a87c] rounded-full" />
            </div>
            <p className="hidden md:block text-gray-400 max-w-[320px] text-[11px] leading-relaxed text-right italic">
              "Specialist Periodontist treating all stages of gum disease."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perioServices.map((service, index) => (
              <ServiceCard key={index} service={service} darkBg={false} />
            ))}
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {[
              { value: "15+", label: "Years Exp." },
              { value: "₹25K", label: "Implants" },
              { value: "3D", label: "Surgery" },
              { value: "95%+", label: "Success" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-lg md:text-xl font-bold text-[#5bb8d4] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] uppercase tracking-[0.1em] text-gray-500 font-medium whitespace-nowrap">
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
