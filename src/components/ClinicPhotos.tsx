import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const clinicImages = [
    { src: '/images/clinic/clinic1.jpg', alt: 'Modern Clinic Interior' },
    { src: '/images/clinic/clinic2.jpg', alt: 'Comfortable Reception Area' },
    { src: '/images/clinic/clinic3.jpg', alt: 'Advanced Dental Lab' },
    { src: '/images/clinic/clinic4.jpg', alt: 'State-of-the-art Equipment' },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f0f5fa] relative overflow-hidden" id="gallery">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      {/* 3D decorations */}
      <div className="absolute top-20 right-10 w-[100px] h-[100px] shape-3d-sphere float-3d opacity-15 pointer-events-none hidden lg:block" />

      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <div className="section-badge mb-3">Our Facility</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Our <span className="text-gradient-teal">Clinic</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl text-sm md:text-base">
            C-38, Lower Ground Floor, Greater Kailash-1, New Delhi (Hansraj Gupta Road, near M Block Market)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 perspective-1500">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden group border-4 border-white card-3d shadow-3d">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 glass-card px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1a3a5c] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-sm">
                {img.alt}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={onBookAppointment} className="btn-primary">
            Visit Our Clinic
          </button>
        </div>
      </div>
    </section>
  );
}
