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
    };

    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-xl font-bold text-[#1a3a5c]">Book Free Consultation</h2>
            <p className="text-gray-500 text-xs mt-0.5">Dr. Vipin Kumar — Periodontist & Implantologist</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none p-1">&times;</button>
        </div>

        {/* Countdown */}
        <div className="bg-[#1a3a5c] text-white p-3 rounded-xl mb-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Limited slots</p>
            <p className="text-sm font-medium">Book within 20 minutes</p>
          </div>
          <div className="text-2xl font-bold font-mono tabular-nums">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </div>
        </div>

        {/* FORM — just 2 fields */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-[#2a7ab5] focus:border-transparent outline-none transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-200 rounded-xl text-base focus:ring-2 focus:ring-[#2a7ab5] focus:border-transparent outline-none transition-shadow"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#d4af37] text-gray-900 py-3.5 rounded-xl font-bold text-base hover:bg-[#c9a227] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isSubmitting ? 'Booking...' : 'Book My Free Consultation'}
          </button>

          <p className="text-center text-[11px] text-gray-400 mt-2">
            We&apos;ll call you within 2 hours to confirm. No spam, ever.
          </p>
        </form>
      </div>
    </div>
  );
}
