import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "kamal katara",
      initials: "KK",
      date: "Recent",
      review: "i highly recommend him. doctor is highly qualified, clinic staff is also helpful, clinic having 5star ambience, clinic is well equipped with latest equipment.i underwent dental implant and teeth whitening with zirconia crown.highly recommend dentesthica and major dr vipin for dental treatment."    },
    {
      name: "jay shankar yadav",
      initials: "JSY",
      date: "Recent",
      review: "my experience at this dental clinic was exceptional. The staff's friendliness and professionalism, the emphasis on cleanliness, the thorough and informative care, and the punctuality all combine to make this clinic a top choice for dental care. I highly recommend this clinic to anyone seeking quality dental services. They have earned my trust, and I will be returning for my future dental needs. Special thanks to Maj Vipin for making me comfortable during the procedure!"
    },
    {
      name: "himanshu dutt sharma",
      initials: "HDS",
      date: "Recent",
      review: "I found major dr vipin as one of the best dental doctor in gk1. He is best implantologist also. I got my implants dine along with zirconia crowns teeth cleaning and zoom whitening. He had explained whole procedure to me. Procedure was painless with excellentresultsas promised. U am v Happy with the results and highly recommend him to others. Clinic is also we'll equipped and having v good staff."
    },
    {
      name: "Phrodie Kayina",
      initials: "PK",
      date: "Recent",
      review: "Such an amazing and kind experience! The dentist there, Maj Dr Vipin, is extremely experienced and also so humble. I got a root canal, crown cap and fillings done and it was all quick and painless.The doctor and his staff are very friendly and also understanding. I was struggling with my personal schedule and they were very accommodating and patient. They even gave me a discount! 100% recommend."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#1a3a5c] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
        </div>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-[#1a3a5c]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#d4af37] mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-light flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
