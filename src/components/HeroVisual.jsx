import {
  Bug,
  Code2,
  Star,
} from "lucide-react";

function RatingStars() {
  return (
    <div className="flex gap-0.5 text-[10px] text-blue-500">

      {[1, 2, 3, 4, 5].map((number) => (
        <Star
          key={number}
          size={9}
          fill="currentColor"
        />
      ))}

    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[510px]">

      {/* Background glow */}

      <div className="absolute right-1 top-4 h-[320px] w-[270px] rounded-[150px] bg-blue-500/10 blur-2xl" />

      {/* Employees Card */}

      <div className="absolute left-8 top-8 h-[148px] w-[130px] rounded-2xl border border-blue-300/70 bg-blue-500/10 p-3 backdrop-blur">

        <div className="flex -space-x-2">

          {["A", "M", "R", "S"].map((person) => (
            <div
              key={person}
              className="grid h-7 w-7 place-items-center rounded-full border-2 border-brand-900 bg-slate-300 text-[9px] font-bold text-slate-700"
            >
              {person}
            </div>
          ))}

        </div>

        <div className="mt-3 text-[29px] font-bold leading-none text-blue-400">
          675+
        </div>

        <p className="mt-1 max-w-[95px] text-[10px] leading-4 text-white">
          Employees Contributing To Our Growth
        </p>

      </div>

      {/* Developer illustration */}

      <div className="absolute right-3 top-20 z-10 h-[260px] w-[270px] rounded-t-[120px] rounded-b-[24px] bg-gradient-to-b from-slate-200 to-slate-300 shadow-glow">

        {/* Head */}

        <div className="absolute left-[92px] top-[28px] h-[104px] w-[86px] rounded-[45%] bg-amber-200">

          {/* Hair */}

          <div className="absolute left-[12px] top-[-13px] h-11 w-[70px] rounded-t-full bg-slate-800 rotate-[-8deg]" />

          {/* Eyes */}

          <div className="absolute left-[10px] top-[48px] h-2 w-3 rounded-full bg-slate-600" />

          <div className="absolute right-[10px] top-[48px] h-2 w-3 rounded-full bg-slate-600" />

          {/* Mouth */}

          <div className="absolute left-[34px] top-[68px] h-1 w-5 rounded-full bg-rose-400" />

        </div>

        {/* Shirt */}

        <div className="absolute bottom-0 left-[48px] h-[160px] w-[175px] rounded-t-[55px] bg-sky-100" />

        {/* Laptop */}

        <div className="absolute bottom-[45px] left-[70px] h-16 w-[140px] -rotate-[22deg] rounded-lg bg-slate-300 shadow-md" />

        <div className="absolute bottom-[-4px] left-[83px] h-24 w-[105px] rounded-xl border-2 border-slate-500 bg-slate-800 shadow-xl" />

      </div>

      {/* Code quality card */}

      <div className="float-card absolute bottom-14 mb-3 left-8 z-20 rounded-md border border-white/20 bg-white px-3 py-2 text-slate-900 shadow-xl">

        <div className="flex items-center gap-2">

          <div className="grid h-7 w-7 place-items-center rounded bg-slate-100">
            <Code2 size={14} />
          </div>

          <div>

            <div className="text-[8px] font-bold">
              Code Quality
            </div>

            <RatingStars />

          </div>

        </div>

      </div>

      {/* Debuggability card */}

      <div className="float-card delay absolute bottom-3 left-8 rounded-md border border-white/20 bg-white px-3 py-2 text-slate-900 shadow-xl">

        <div className="flex items-center gap-2">

          <div className="grid h-7 w-7 place-items-center rounded bg-slate-100">
            <Bug size={14} />
          </div>

          <div>

            <div className="text-[8px] font-bold">
              Debuggability
            </div>

            <RatingStars />

          </div>

        </div>

      </div>

      {/* Decorative elements */}

      <div className="absolute right-[-5px] top-[60px] text-blue-400">
        ◇
      </div>

      <div className="absolute right-0 top-[190px] text-yellow-400">
        ○
      </div>

      {/* Dot pattern */}

      <div className="absolute bottom-[62px] right-3 grid grid-cols-5 gap-1 opacity-70">

        {Array.from({
          length: 30,
        }).map((_, index) => (
          <span
            key={index}
            className="h-1 w-1 rounded-full bg-white"
          />
        ))}

      </div>

    </div>
  );
}