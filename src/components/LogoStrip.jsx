const logos = [
  "Microsoft",
  "aws",
  "Google Cloud",
  "Clutch 4.8",
];

export default function LogoStrip() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-2">

      {logos.map((logo) => (
        <div
          key={logo}
          className="flex h-9 min-w-[66px] items-center justify-center rounded border border-white/20 bg-slate-950/20 px-3 text-[8px] font-bold text-white/90"
        >
          {logo}
        </div>
      ))}

    </div>
  );
}