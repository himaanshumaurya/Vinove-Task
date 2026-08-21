const processSteps = [
  {
    number: "01",
    label: "DAY 0",
    title: "Submit a brief",
    description:
      "Role, stack, seniority, timezone preference, and any team context you want us to match on. It takes 15 minutes. We ask clarifying questions on the same call.",
  },
  {
    number: "02",
    label: "48 HOURS",
    title: "Receive shortlist",
    description:
      "Two to three anonymised profiles within 48 hours: experience summary, stack depth, a delivery outcome from a comparable engagement, and availability data. You review, shortlist, and interview whomever you want.",
  },
  {
    number: "03",
    label: "DAY 3-4",
    title: "Interview and select",
    description:
      "Standard technical interview. Your format, your questions. No intermediaries on the call. If none of the first round fit, we re-shortlist at no additional cost.",
  },
  {
    number: "04",
    label: "WEEK 1",
    title: "Structured onboarding week",
    description:
      "Day 1: repository and environment access, codebase walkthrough. Day 2–3: architecture context with your tech lead. Day 4–5: first PR submitted.",
  },
  {
    number: "05",
    label: "ONGOING",
    title: "Ongoing cadence",
    description:
      "Daily standups in your timezone. Async updates via your preferred channel (Slack, Teams, Linear). 90-day checkpoint with your AM and the engineer—covers technical alignment, capacity utilisation, and any fit adjustments before they become issues.",
  },
  {
    number: "06",
    label: "<2 WEEKS, GUARANTEED",
    title: "Replacement guarantee",
    description:
      "If an engineer leaves, underperforms, or doesn't fit the team, you can find a replacement within 2 weeks at no cost. Response on the same day. No ticket queues.",
  },
];

const OnboardingProcess = () => {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-[76px] lg:py-[58px]">
      <div className="mx-auto max-w-[1070px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
          <div>
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[2px] text-[#2764e8]">
              Onboarding to ongoing
            </p>

            <h2 className="max-w-[610px] text-[36px] font-bold leading-[1.22] tracking-[-1px] text-[#0b2056] sm:text-[40px] lg:text-[38px]">
              From brief to contributing engineer in five working days
            </h2>
          </div>

          <div className="flex items-start lg:pt-10">
            <p className="max-w-[330px] text-[15px] leading-[1.55] text-[#656873]">
              The process is designed around one constraint: your team's
              continuity. Engineers join your workflows - not the other way
              around.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-[65px] grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-[42px]">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Top timeline */}
              <div className="relative mb-[18px] h-[48px]">
                {/* Label */}
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3px] text-[#7a7e89]">
                  {step.label}
                </p>

                {/* Number + dotted line */}
                <div className="relative flex items-center">
                  <div className="relative z-10 flex h-[37px] w-[37px] shrink-0 items-center justify-center rounded-[8px] bg-[#d6e5ff]">
                    <span className="text-[15px] font-medium text-[#2764e8]">
                      {step.number}
                    </span>
                  </div>

                  {/* Dotted connector */}
                  {index % 3 !== 2 && (
                    <div className="absolute left-[37px] right-[-32px] top-1/2 border-t border-dashed border-[#d9dce3]" />
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="mb-[7px] text-[15px] font-medium leading-[1.4] text-[#202127]">
                {step.title}
              </h3>

              <p className="text-[12px] leading-[1.55] text-[#7a7e89]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;