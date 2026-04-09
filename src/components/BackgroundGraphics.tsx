export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2a7ab5] rounded-full blur-[80px] opacity-[0.08] animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-[#1a3a5c] rounded-full blur-[70px] opacity-[0.05] soft-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern-dots opacity-[0.02]" />
    </div>
  );
}
