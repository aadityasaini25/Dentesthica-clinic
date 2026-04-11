const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "15 Years of Experience",
    desc: "Dr. Vipin Kumar brings over 15 years of expertise in periodontics and implantology, ensuring the highest standard of care.",
    accent: "from-[#2a7ab5] to-[#1a5a8c]",
    glow: "shadow-[#2a7ab5]/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "World-Class Clinic Ambience",
    desc: "Our GK-1 clinic offers a premium, comfortable environment designed to make every visit relaxing and stress-free.",
    accent: "from-[#d4af37] to-[#c9a227]",
    glow: "shadow-[#d4af37]/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Latest Advanced Equipment",
    desc: "Cutting-edge technology including digital X-rays, laser systems, and 3D imaging for precise, painless treatments.",
    accent: "from-[#2a7ab5] to-[#1a5a8c]",
    glow: "shadow-[#2a7ab5]/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Premium Location – GK-1",
    desc: "C-38, Greater Kailash-1 on Hansraj Gupta Road, near M Block Market — easily accessible from across South Delhi.",
    accent: "from-[#d4af37] to-[#c9a227]",
    glow: "shadow-[#d4af37]/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f0f5fa] relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      {/* 3D decorative shapes */}
      <div className="absolute top-10 right-20 w-[80px] h-[80px] shape-3d-cube float-3d-slow opacity-15 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-[60px] h-[60px] shape-3d-cube float-3d opacity-10 pointer-events-none hidden lg:block" style={{ transform: 'rotate(-30deg)' }} />
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] shape-3d-sphere float-3d-slow opacity-20 pointer-events-none -translate-x-1/2 hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-[160px] h-[160px] shape-3d-sphere float-3d opacity-15 pointer-events-none translate-x-1/3 translate-y-1/3 hidden lg:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center md:text-left mb-14">
          <div className="section-badge mb-3 md:mx-0 mx-auto w-fit">Why Dentesthica</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose <span className="text-gradient-teal">Dentesthica</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 perspective-1500">
          {points.map((item, i) => (
            <div
              key={i}
              className="group glass-card p-7 md:p-8 rounded-2xl card-3d inner-glow shadow-3d"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} text-white mb-5 shadow-lg ${item.glow} group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
