import { ArrowRight, Star } from "lucide-react";

const TeamScaleSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#07194f]">
      {/* Background decorative curves */}
      <div className="pointer-events-none absolute -right-[80px] -top-[190px] h-[520px] w-[300px] rounded-full border border-[#18316f]" />

      <div className="pointer-events-none absolute -right-[20px] -top-[160px] h-[470px] w-[180px] rounded-full border border-[#18316f] rotate-[25deg]" />

      <div className="pointer-events-none absolute -bottom-[250px] right-[40px] h-[500px] w-[230px] rounded-full border border-[#18316f] rotate-[-20deg]" />

      {/* Left decorative pattern */}
      <div className="pointer-events-none absolute -left-[25px] bottom-[45px] h-[115px] w-[120px] opacity-40">
        <div className="absolute left-0 top-0 h-[30px] w-[90px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-8px] top-[14px] h-[30px] w-[100px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-15px] top-[28px] h-[30px] w-[108px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-20px] top-[42px] h-[30px] w-[115px] rounded-[50%] border-[3px] border-[#132b67]" />
        <div className="absolute left-[-25px] top-[56px] h-[30px] w-[120px] rounded-[50%] border-[3px] border-[#132b67]" />
      </div>

      <div className="relative mx-auto flex min-h-[285px] max-w-[1150px] items-center px-6 py-10 lg:px-[76px]">
        {/* Left content */}
        <div className="w-full lg:max-w-[650px]">
          <h2 className="text-[27px] font-bold leading-[1.2] tracking-[-0.5px] text-white sm:text-[30px]">
            Scale Your Team, Not Your Hiring.
          </h2>

          <p className="mt-2 text-[13px] leading-5 text-[#d5ddf1] sm:text-[14px]">
            675+ in-house engineers across Java, Python, React, Node.js, Data
            Engineering.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="group flex h-[33px] items-center gap-2 rounded-full bg-[#2868ed] px-4 text-[12px] font-medium text-white transition hover:bg-[#1e5bd7]"
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
              className="flex h-[33px] items-center gap-2 rounded-full border border-white px-4 text-[12px] font-medium text-white transition hover:bg-white hover:text-[#07194f]"
            >
              Book a Call
              <ArrowRight size={14} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Right statistics */}
        <div className="mt-8 hidden w-[263px] shrink-0 lg:ml-auto lg:block">
          {/* Top cards */}
          <div className="grid grid-cols-2 gap-[6px]">
            {/* Projects */}
            <div className="h-[81px] rounded-[9px] border border-[#23417e] bg-[#102b6b]/90 px-4 py-3">
              <p className="text-[23px] font-medium leading-6 text-white">
                2,500+
              </p>

              <p className="mt-1 max-w-[95px] text-[8px] leading-[11px] text-white">
                Projects completed
                <br />
                across 20+ years
              </p>
            </div>

            {/* Success rate */}
            <div className="h-[81px] rounded-[9px] border border-[#23417e] bg-[#102b6b]/90 px-4 py-3">
              <p className="text-[23px] font-medium leading-6 text-white">
                94%
              </p>

              <p className="mt-1 max-w-[100px] text-[8px] leading-[11px] text-white">
                Engagements delivered
                <br />
                on time
              </p>
            </div>
          </div>

          {/* Rating card */}
          <div className="mt-[6px] h-[81px] rounded-[9px] border border-[#23417e] bg-[#102b6b]/90 px-4 py-3">
            <div className="flex items-center gap-3">
              {/* Small review icons */}
              <div className="grid grid-cols-2 gap-[3px]">
                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-[2px] border border-[#91a4d0] bg-[#193674]">
                  <span className="text-[11px] font-bold text-white">C</span>
                </div>

                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-[2px] border border-[#91a4d0] bg-[#193674]">
                  <span className="text-[10px] font-bold text-white">F</span>
                </div>

                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-[2px] border border-[#91a4d0] bg-[#193674]">
                  <span className="text-[10px] text-white">♟</span>
                </div>

                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-[2px] border border-[#91a4d0] bg-[#193674]">
                  <span className="text-[10px] text-white">◇</span>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-[23px] font-semibold leading-6 text-white">
                    4.8/5
                  </span>

                  <Star
                    size={18}
                    fill="currentColor"
                    className="ml-1 text-[#4b8cff]"
                  />
                </div>

                <p className="mt-[3px] text-[8px] text-white">
                  Client Rating on Clutch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile statistics */}
      <div className="relative mx-auto grid max-w-[500px] grid-cols-2 gap-2 px-6 pb-10 lg:hidden">
        <div className="rounded-lg border border-[#23417e] bg-[#102b6b] p-4">
          <p className="text-2xl font-semibold text-white">2,500+</p>
          <p className="mt-1 text-xs text-[#d5ddf1]">
            Projects completed across 20+ years
          </p>
        </div>

        <div className="rounded-lg border border-[#23417e] bg-[#102b6b] p-4">
          <p className="text-2xl font-semibold text-white">94%</p>
          <p className="mt-1 text-xs text-[#d5ddf1]">
            Engagements delivered on time
          </p>
        </div>

        <div className="col-span-2 rounded-lg border border-[#23417e] bg-[#102b6b] p-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold text-white">4.8/5</div>
            <Star
              size={18}
              fill="currentColor"
              className="text-[#4b8cff]"
            />
          </div>
          <p className="mt-1 text-xs text-[#d5ddf1]">
            Client Rating on Clutch
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamScaleSection;