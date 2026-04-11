import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Kamal Katara",
      initials: "KK",
      date: "Recent",
      review: "I highly recommend him. Doctor is highly qualified, clinic staff is also helpful, clinic having 5-star ambience, clinic is well equipped with latest equipment. I underwent dental implant and teeth whitening with zirconia crown. Highly recommend Dentesthica and Maj Dr Vipin for dental treatment.",
      color: "bg-gradient-to-br from-[#2a7ab5] to-[#1a5a8c]",
    },
    {
      name: "Jay Shankar Yadav",
      initials: "JS",
      date: "Recent",
      review: "My experience at this dental clinic was exceptional. The staff's friendliness and professionalism, the emphasis on cleanliness, the thorough and informative care, and the punctuality all combine to make this clinic a top choice for dental care. Special thanks to Maj Vipin!",
      color: "bg-gradient-to-br from-[#1a3a5c] to-[#0d2840]",
    },
    {
      name: "Himanshu Dutt Sharma",
      initials: "HD",
      date: "Recent",
      review: "I found Maj Dr Vipin as one of the best dental doctor in GK1. He is the best implantologist. I got my implants done along with zirconia crowns, teeth cleaning and zoom whitening. Procedure was painless with excellent results. Very happy with the results!",
      color: "bg-gradient-to-br from-[#2a7ab5] to-[#1a5a8c]",
    },
    {
      name: "Phrodie Kayina",
      initials: "PK",
      date: "Recent",
      review: "Such an amazing and kind experience! The dentist, Maj Dr Vipin, is extremely experienced and also so humble. I got a root canal, crown cap and fillings done — all quick and painless. The doctor and his staff are very friendly and accommodating. 100% recommend.",
      color: "bg-gradient-to-br from-[#1a3a5c] to-[#0d2840]",
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-white border-t border-gray-50 relative overflow-hidden">
      {/* 3D bg shapes */}
      <div className="absolute top-10 left-10 w-[120px] h-[120px] shape-3d-ring float-3d-slow opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-[80px] h-[80px] shape-3d-sphere float-3d opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="section-badge mb-3">Testimonials</div>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <Image
                src="/images/google.png"
                alt="Google"
                width={100}
                height={34}
                className="object-contain opacity-90"
              />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#f0d060] rounded-full" />
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-[#d4af37] text-lg">★★★★★</span>
            <span className="text-sm font-semibold text-gray-700">4.9 on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 perspective-1500">
          {reviews.map((review, index) => (
            <div key={index} className="group bg-white p-6 md:p-7 rounded-2xl border border-gray-100/80 card-3d inner-glow flex flex-col h-full">
              <div className="flex items-center gap-3.5 mb-5">
                <div className={`w-12 h-12 ${review.color} text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-[#1a3a5c]/15`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900 leading-tight">{review.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[#d4af37] text-xs">★★★★★</span>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow">{review.review}</p>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-[11px] text-gray-400 font-medium">Verified Google Review</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
