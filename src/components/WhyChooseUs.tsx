const points = [
  {
    title: "15 Years of Experience",
    desc: "Dr. Vipin Kumar brings over 15 years of expertise in periodontics and implantology, ensuring you receive the highest standard of dental care.",
  },
  {
    title: "World-Class Clinic Ambience",
    desc: "Our clinic at GK-1 offers a premium, comfortable environment designed to make every visit relaxing and stress-free.",
  },
  {
    title: "Latest Advanced Equipment",
    desc: "We utilize cutting-edge dental technology including digital X-rays, laser systems, and 3D imaging for precise, efficient, and painless treatments.",
  },
  {
    title: "Premium Location – GK-1, Delhi",
    desc: "Conveniently located at C-38, Greater Kailash-1 on Hansraj Gupta Road, near M Block Market — easily accessible from across South Delhi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f0f5fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#2a7ab5] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Why Dentesthica</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Dentesthica
          </h2>
          <div className="w-16 h-0.5 bg-[#2a7ab5] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
