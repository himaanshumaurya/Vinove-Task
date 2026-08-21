import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#07194f]">
      {/* Decorative curved lines */}
      <div className="pointer-events-none absolute -right-[80px] -top-[220px] h-[470px] w-[300px] rounded-full border border-[#19316c]" />

      <div className="pointer-events-none absolute -right-[115px] -top-[155px] h-[440px] w-[230px] rounded-full border border-[#19316c] rotate-[25deg]" />

      <div className="pointer-events-none absolute -right-[35px] -bottom-[270px] h-[520px] w-[220px] rounded-full border border-[#19316c] rotate-[-20deg]" />

      {/* Left decorative pattern */}
      <div className="pointer-events-none absolute -left-[12px] top-[103px] h-[105px] w-[85px] opacity-50">
        <div className="absolute left-0 top-0 h-[28px] w-[70px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-7px] top-[13px] h-[28px] w-[78px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-13px] top-[26px] h-[28px] w-[85px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-18px] top-[39px] h-[28px] w-[91px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-23px] top-[52px] h-[28px] w-[97px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-28px] top-[65px] h-[28px] w-[103px] rounded-[50%] border-[3px] border-[#132b67]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[275px] max-w-[1140px] flex-col items-center justify-center px-6 text-center">
        <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.6px] text-white sm:text-[32px]">
          Extend your team with engineers who ship
        </h2>

        <p className="mt-[9px] text-[13px] leading-5 text-[#d7def0] sm:text-[14px]">
          A Delivery Pod is operational in under two weeks. The first sprint
          metric report is at the first weekly demo.
        </p>

        {/* CTA Buttons */}
        <div className="mt-[31px] flex items-center gap-[16px]">
          <button
            type="button"
            className="group flex h-[33px] items-center gap-2 rounded-full bg-[#2868ed] px-[15px] text-[12px] font-medium text-white transition hover:bg-[#1d5bd6]"
          >
            Talk to Us

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button
            type="button"
            className="group flex h-[33px] items-center gap-2 rounded-full border border-white px-[15px] text-[12px] font-medium text-white transition hover:bg-white hover:text-[#07194f]"
          >
            Book a Call

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Supporting text */}
        <p className="mt-[13px] text-[11px] text-[#737e9b]">
          30 minutes with a solution architect. No obligation.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;