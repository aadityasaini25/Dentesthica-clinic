'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

const BOOKING_SCRIPT_URL = process.env.NEXT_PUBLIC_BOOKING_SCRIPT_URL || '';

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      concern: formData.get('dentalConcern') as string,
    };
    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      }
      onClose();
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please call us at +91 88512 02080 to book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 perspective-1500">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1a3a5c]/60 backdrop-blur-md" onClick={onClose} />

      {/* 3D Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-3d-teal border border-white/50"
        style={{ animation: 'slide-up 0.4s cubic-bezier(0.23, 1, 0.32, 1)', transformStyle: 'preserve-3d' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-20 shadow-sm"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header gradient with 3D depth */}
        <div className="bg-gradient-to-r from-[#1a3a5c] to-[#2a7ab5] px-6 py-5 rounded-t-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 shape-3d-sphere opacity-20 translate-x-8 -translate-y-8" />
          <h2 className="text-xl md:text-2xl font-bold text-white relative z-10">Book Your Appointment</h2>
          <p className="text-white/70 text-sm mt-1 relative z-10">With our expert Major Dr. Vipin K. Sharma</p>
        </div>

        <div className="p-6">
          {/* Offer info - 3D card */}
          <div className="bg-[#f0f5fa] p-4 rounded-xl mb-5 flex items-center gap-3 inner-glow border border-[#2a7ab5]/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#2a7ab5] to-[#1a5a8c] flex items-center justify-center shrink-0 shadow-lg shadow-[#2a7ab5]/20">
              <span className="text-white text-sm">🦷</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1a3a5c]">Includes: Professional Consultation</p>
              <p className="text-xs text-gray-500">Complete examination & treatment plan</p>
            </div>
          </div>

          {/* Countdown - 3D dark card */}
          <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0d2840] p-4 rounded-xl mb-6 flex items-center justify-between shadow-3d-dark">
            <div className="flex items-center gap-2">
              <span className="text-lg">⏰</span>
              <p className="text-white/80 text-sm font-medium">Offer expires in</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-white/10 shadow-inner">
              <span className="text-white text-xl font-bold font-mono tabular-nums">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name</label>
              <input type="text" name="fullName" required placeholder="Enter your full name"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-base focus:bg-white focus:border-[#2a7ab5] focus:ring-2 focus:ring-[#2a7ab5]/10 focus:shadow-sm transition-all outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone Number</label>
              <input type="tel" name="phoneNumber" required placeholder="+91 XXXXX XXXXX"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-base focus:bg-white focus:border-[#2a7ab5] focus:ring-2 focus:ring-[#2a7ab5]/10 focus:shadow-sm transition-all outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
              <input type="email" name="email" required placeholder="you@example.com"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-base focus:bg-white focus:border-[#2a7ab5] focus:ring-2 focus:ring-[#2a7ab5]/10 focus:shadow-sm transition-all outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Dental Concern</label>
              <textarea name="dentalConcern" required rows={2} placeholder="Briefly describe your dental issue"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-base resize-none focus:bg-white focus:border-[#2a7ab5] focus:ring-2 focus:ring-[#2a7ab5]/10 focus:shadow-sm transition-all outline-none" />
            </div>
            <button type="submit" disabled={isSubmitting}
              className="w-full btn-primary py-3.5 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Booking...
                </span>
              ) : 'Book Appointment'}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-4">
            Or call directly: <a href="tel:+918851202080" className="text-[#2a7ab5] font-semibold hover:underline">+91 88512 02080</a>
          </p>
        </div>
      </div>
    </div>
  );
}
