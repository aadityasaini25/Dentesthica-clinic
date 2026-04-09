'use client';

import { useState } from 'react';

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  );
}

function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
  );
}

const faqs = [
  {
    question: "What are dental implants and how do they work?",
    answer: "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. Once healed, a natural-looking crown is placed on top. They function just like real teeth and can last a lifetime with proper care.",
    benefit: "Get a permanent, natural-looking replacement starting at just ₹25,000.",
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4">
            <span>✨</span>
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
            Common <span className="text-[#1a3a5c]">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg font-light">
            Empowering your decision with transparent information and clinical insights.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-300 rounded-2xl border bg-white ${
                  isOpen ? 'border-[#1a3a5c]/20 shadow-md' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? 'text-[#1a3a5c]' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                    isOpen
                    ? 'bg-[#1a3a5c] border-[#1a3a5c] text-white rotate-90 shadow-sm shadow-[#1a3a5c]/20'
                    : 'bg-gray-50 border-gray-100 text-gray-400 group-hover:border-[#1a3a5c]/30 group-hover:text-[#1a3a5c]'
                  }`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </button>

                {/* CSS-only expand/collapse — no framer-motion needed */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-5 pb-6 md:px-6 md:pb-8 pt-0">
                    <div className="w-full h-px bg-gray-50 mb-6" />
                    <div className="space-y-4">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                      <p className="text-[#1a3a5c] text-base font-medium leading-relaxed italic border-l-2 border-blue-100 pl-4">
                        &quot;{faq.benefit}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs">
            Still have questions? <a href="tel:+918851202080" className="text-[#1a3a5c] font-bold underline hover:text-[#2a7ab5] transition-colors">Contact our specialist</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
