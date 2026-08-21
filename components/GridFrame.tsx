function Crosshair({ className }: { className: string }) {
  return (
    <div aria-hidden className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white mix-blend-difference" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white mix-blend-difference" />
    </div>
  );
}

export default function GridFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <div className="mx-auto h-full max-w-6xl px-4 sm:px-6">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 w-px bg-white mix-blend-difference" />
          <div className="absolute inset-y-0 right-0 w-px bg-white mix-blend-difference" />
        </div>
      </div>
      <Crosshair className="left-3 top-3 sm:left-5" />
      <Crosshair className="right-3 top-3 sm:right-5" />
      <Crosshair className="bottom-3 left-3 sm:left-5" />
      <Crosshair className="bottom-3 right-3 sm:right-5" />
    </div>
  );
}
