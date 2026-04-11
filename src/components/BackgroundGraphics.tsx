export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none perspective-2000">
      {/* 3D Floating spheres */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] shape-3d-sphere float-3d opacity-50" />
      <div className="absolute bottom-[10%] right-[-3%] w-[400px] h-[400px] shape-3d-sphere float-3d-delayed opacity-35" />
      <div className="absolute top-[45%] left-[60%] w-[250px] h-[250px] shape-3d-sphere float-3d-slow opacity-25" />
      <div className="absolute top-[30%] left-[15%] w-[180px] h-[180px] shape-3d-sphere float-3d-delayed opacity-15" />

      {/* 3D Floating cubes */}
      <div className="absolute top-[20%] right-[15%] w-[100px] h-[100px] shape-3d-cube float-3d opacity-35" />
      <div className="absolute bottom-[25%] left-[10%] w-[70px] h-[70px] shape-3d-cube float-3d-delayed opacity-25" style={{ transform: 'rotate(-20deg)' }} />
      <div className="absolute top-[60%] right-[30%] w-[50px] h-[50px] shape-3d-cube float-3d-slow opacity-20" style={{ transform: 'rotate(30deg)' }} />

      {/* 3D Rings */}
      <div className="absolute top-[15%] left-[40%] w-[180px] h-[180px] shape-3d-ring float-3d-slow opacity-20" />
      <div className="absolute bottom-[15%] right-[20%] w-[120px] h-[120px] shape-3d-ring float-3d opacity-15" />
      <div className="absolute top-[70%] left-[30%] w-[80px] h-[80px] shape-3d-ring float-3d-delayed opacity-12" />

      {/* Dot pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern-dots opacity-[0.015]" />

      {/* Gradient overlays — top and bottom vignette */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-[#2a7ab5]/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#1a3a5c]/[0.03] to-transparent" />
      {/* Radial center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(42,122,181,0.025) 0%, transparent 70%)' }} />
    </div>
  );
}
