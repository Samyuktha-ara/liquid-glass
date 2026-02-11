export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Primary violet blob — top left */}
      <div className="bg-blob w-[600px] h-[600px] bg-violet-600/[0.07] top-[-200px] left-[-150px] animate-pulse-slow" />

      {/* Cyan blob — top right */}
      <div className="bg-blob w-[500px] h-[500px] bg-cyan-500/[0.05] top-[-100px] right-[-100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Purple blob — center */}
      <div className="bg-blob w-[700px] h-[700px] bg-purple-600/[0.04] top-[40%] left-[30%] animate-pulse-slow" style={{ animationDelay: "4s" }} />

      {/* Deep blue blob — bottom */}
      <div className="bg-blob w-[500px] h-[500px] bg-blue-600/[0.06] bottom-[-200px] right-[10%] animate-pulse-slow" style={{ animationDelay: "1s" }} />
    </div>
  );
}
