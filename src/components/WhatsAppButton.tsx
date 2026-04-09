'use client';

export default function WhatsAppButton() {
  const phoneNumber = "+918851202080";
  const message = "Hello! I would like to book an appointment at Dentesthica.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#2a7ab5] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hover:bg-[#1a5a8c]"
      aria-label="Contact via WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
    </button>
  );
}
