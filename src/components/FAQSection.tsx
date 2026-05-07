'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What are dental implants and how do they work?",
    answer: "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. Once healed, a natural-looking crown is placed on top. They function just like real teeth and can last a lifetime with proper care.",
    benefit: "Get a permanent, natural-looking replacement starting at just ₹20,000.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer: "Modern implant procedures are virtually painless. We use advanced local anesthesia and laser technology to ensure maximum comfort. Most patients report minimal discomfort during and after the procedure.",
    benefit: "Experience pain-free treatment with our advanced laser dentistry techniques.",
  },
  {
    question: "What is periodontal (gum) treatment?",
    answer: "Periodontal treatment addresses gum disease, recession, and other gum-related issues. This includes deep cleaning (scaling & root planing), gum surgery, laser treatments, and recession coverage procedures to restore gum health.",
    benefit: "Protect your teeth and restore healthy gums with expert periodontal care.",
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper oral hygiene and regular check-ups, dental implants can last 20-25 years or even a lifetime. They are the most durable and reliable option for replacing missing teeth, with a success rate of over 95%.",
    benefit: "Invest in a permanent solution that gives you confidence for life.",
  },
  {
    question: "What are the clinic timings?",
    answer: "Dentesthica is open Monday through Saturday, from 10:00 AM to 7:00 PM. We are closed on Sundays. You can book your appointment by calling 8851202080 or 011-45032266.",
    benefit: "Conveniently located at GK-1, New Delhi with easy appointment scheduling.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden" id="faq">
      {/* 3D shapes */}
      <div className="absolute top-20 right-10 w-[80px] h-[80px] shape-3d-cube float-3d-slow opacity-8 pointer-events-none hidden lg:block" style={{ transform: 'rotate(25deg)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="section-badge mb-3 mx-auto w-fit">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Common <span className="text-gradient-teal">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Empowering your decision with transparent information and clinical insights.
          </p>
        </div>

        <div className="space-y-3 perspective-1500">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-500 rounded-2xl border ${
                  isOpen ? 'glass-card border-[#2a7ab5]/20 shadow-3d-teal scale-[1.01] inner-glow' : 'bg-white border-gray-100 hover:border-[#2a7ab5]/15 hover:shadow-md'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 pr-4 ${
                    isOpen ? 'text-[#1a3a5c]' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isOpen
                    ? 'bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] text-white rotate-180 shadow-lg shadow-[#2a7ab5]/25'
                    : 'bg-gray-50 text-gray-400 group-hover:bg-[#2a7ab5]/5 group-hover:text-[#2a7ab5]'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-5 pb-6 md:px-6 md:pb-8 pt-0">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent mb-5" />
                    <div className="space-y-4">
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                      <p className="text-[#1a3a5c] text-sm font-medium leading-relaxed italic border-l-2 border-[#2a7ab5]/20 pl-4">
                        &quot;{faq.benefit}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            Still have questions?{' '}
            <a href="tel:+918851202080" className="text-[#2a7ab5] font-bold hover:underline transition-colors">
              Contact our specialist
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
