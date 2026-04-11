import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  const highlights = [
    "15+ Years of Clinical Experience",
    "Specialist in Dental Implants & Periodontics",
    "Expert in Full Mouth Rehabilitation",
    "Advanced Laser Dentistry Practitioner",
    "World-class Clinic with Latest Equipment"
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* 3D background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] shape-3d-sphere float-3d-slow opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[200px] h-[200px] shape-3d-sphere float-3d opacity-15 pointer-events-none" />
      <div className="absolute top-20 left-[30%] w-[60px] h-[60px] shape-3d-cube float-3d-delayed opacity-10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="section-badge mb-3 mx-auto w-fit">Our Specialist</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Meet Your <span className="text-gradient-teal">Dental Expert</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] rounded-full mx-auto" />
          <p className="mt-5 text-gray-500 text-base md:text-lg font-light">
            Trusted by thousands of patients for expert periodontal and implant care.
          </p>
        </div>

        <div className="max-w-6xl mx-auto perspective-1500">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start">
            {/* Doctor Image - 3D */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center preserve-3d">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-3d-teal group card-3d border-4 border-white">
                <Image
                  src="/images/doctor/dr-vipin-kumar.jpg"
                  alt="Dr. Vipin Kumar"
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/40 via-transparent to-transparent" />

                {/* 3D floating badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3.5 shadow-3d border border-white/60" style={{ transform: 'translateZ(30px)' }}>
                  <p className="font-bold text-sm text-[#1a3a5c]">Dr. Vipin Kumar</p>
                  <p className="text-[11px] text-[#2a7ab5] font-semibold uppercase tracking-wider">Periodontist & Implantologist</p>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1.5 tracking-tight">
                Dr. Vipin Kumar
              </h3>
              <p className="text-[#2a7ab5] font-semibold text-sm uppercase tracking-[0.15em] mb-5">
                Periodontist & Implantologist
              </p>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">
                Dr. Vipin Kumar is a highly experienced Periodontist and Implantologist with over 15 years of clinical expertise. He specializes in advanced dental implant procedures, gum treatments, and full mouth rehabilitation using the latest technology and techniques.
              </p>

              <div className="space-y-3 mb-6">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center md:justify-start group/h">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] flex items-center justify-center shrink-0 shadow-sm shadow-[#2a7ab5]/25 group-hover/h:shadow-md group-hover/h:shadow-[#2a7ab5]/30 group-hover/h:scale-110 transition-all">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-sm italic leading-relaxed mb-8 border-l-2 border-[#2a7ab5]/20 pl-4">
                Committed to providing personalized, pain-free dental care in a world-class clinic environment at the premium GK-1 location in New Delhi.
              </p>

              <button
                onClick={onBookAppointment}
                className="btn-primary py-3.5 px-8 text-sm"
              >
                Book Consultation with Dr. Kumar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
