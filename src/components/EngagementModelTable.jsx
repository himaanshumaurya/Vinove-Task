const engagementData = [
  {
    factor: "Team management",
    teamExtension: "You manage directly",
    deliveryPods: "ValueCoders manages pod",
    developmentCentres: "You manage, VC handles ops",
  },
  {
    factor: "Governance structure",
    teamExtension: "Your PM, your rituals",
    deliveryPods: "VC sprint governance + metrics",
    developmentCentres: "Your brand and standards",
  },
  {
    factor: "Billing model",
    teamExtension: "Per-engineer, monthly",
    deliveryPods: "Monthly pod rate",
    developmentCentres: "Cost-plus or managed",
  },
  {
    factor: "Ramp speed",
    teamExtension: "Per-engineer, monthly",
    deliveryPods: "1–2 week pod formation",
    developmentCentres: "4–6 week centre setup",
  },
  {
    factor: "Minimum commitment",
    teamExtension: "3 months",
    deliveryPods: "3 months",
    developmentCentres: "12 months",
  },
];

const EngagementModelTable = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[930px]">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-[32px] font-bold leading-[1.2] tracking-[-0.8px] text-[#0b2056] sm:text-[38px]">
            Which Engagement Model Fits Your Situation?
          </h2>

          <p className="mx-auto mt-3 max-w-[680px] text-[15px] leading-6 text-[#656873] sm:text-[16px]">
            Staff augmentation is not the right model for every buyer. Use this
            comparison to determine which engagement model best matches your
            delivery needs.
          </p>
        </div>

        {/* Table wrapper */}
        <div className="relative overflow-x-auto rounded-[14px] shadow-[0_5px_18px_rgba(0,0,0,0.10)]">
          <table className="w-full min-w-[850px] border-collapse">
            <thead>
              <tr className="h-[70px]">
                {/* Factor */}
                <th className="w-[25%] bg-[#f1f1f4] px-5 text-left text-[14px] font-medium uppercase tracking-[-0.1px] text-[#202127]">
                  Factor
                </th>

                {/* Team Extension */}
                <th className="w-[25%] bg-[#dce7ff] px-5 text-left text-[14px] font-medium uppercase text-[#2864e8]">
                  Team Extension
                </th>

                {/* Delivery Pods */}
                <th className="w-[25%] bg-[#f1f1f4] px-5 text-left text-[14px] font-medium uppercase text-[#202127]">
                  Delivery Pods
                </th>

                {/* Development Centres */}
                <th className="w-[25%] bg-[#f1f1f4] px-5 text-left text-[14px] font-medium uppercase text-[#202127]">
                  Development Centres
                </th>
              </tr>
            </thead>

            <tbody>
              {engagementData.map((row, index) => (
                <tr
                  key={row.factor}
                  className="h-[64px]"
                >
                  {/* Factor */}
                  <td className="border-t border-[#eeeeef] bg-white px-5 text-[14px] font-medium text-[#202127]">
                    {row.factor}
                  </td>

                  {/* Team Extension */}
                  <td className="border-l border-t border-[#eeeeef] bg-[#f9fbff] px-5 text-[14px] text-[#656873]">
                    {row.teamExtension}
                  </td>

                  {/* Delivery Pods */}
                  <td className="border-l border-t border-[#eeeeef] bg-white px-5 text-[14px] text-[#656873]">
                    {row.deliveryPods}
                  </td>

                  {/* Development Centres */}
                  <td className="border-l border-t border-[#eeeeef] bg-white px-5 text-[14px] text-[#656873]">
                    {row.developmentCentres}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pointer-events-none absolute left-[50%] top-[83%] -translate-x-1/2 -translate-y-1/2">
  <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#5225c9] shadow-[0_2px_6px_rgba(82,37,201,0.35)]">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top arrow - White */}
      <path
        d="M4 4.5L9 9.5L14 4.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom arrow - Gray */}
      <path
        d="M4 9L9 14L14 9"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelTable;