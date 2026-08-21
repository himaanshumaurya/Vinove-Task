const companyLogos = [
  {
    name: "Yale University",
    className: "font-serif text-[18px] text-[#174a88]",
  },
  {
    name: "◉",
    className: "text-[35px] text-slate-500",
  },
  {
    name: "دبي POLICE",
    className: "text-[13px] font-bold text-[#008b69]",
  },
  {
    name: "Panasonic",
    className: "text-[18px] font-bold text-[#00549f]",
  },
  {
    name: "Infosys",
    className: "text-[20px] font-light text-[#2384d0]",
  },
  {
    name: "KIA",
    className: "text-[22px] font-black tracking-[-2px] text-[#111827]",
  },
  {
    name: "HITACHI",
    className: "text-[18px] font-bold text-[#e34242]",
  },
  {
    name: "orange",
    className: "bg-[#ff7900] px-1 py-1 text-[11px] font-bold text-white",
  },
  {
    name: "World Health Organization",
    className: "text-[10px] font-semibold leading-3 text-[#008bd2]",
  },
];

export default function EngagementSection() {
  return (
    <section className="relative overflow-hidden bg-white border-x border-[#10a866]">

      {/* Top border */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#071d63]" />

      <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-16">

        <div className="pt-7">

          <div className="flex items-center gap-8">

            <div className="hidden h-px flex-1 bg-slate-200 sm:block" />

            <h2 className="shrink-0 text-center text-[16px] font-bold text-[#202020] sm:text-[17px]">
              Trusted by startups and Fortune{" "}
              <span className="text-[#2563eb]">
                500+
              </span>{" "}
              companies
            </h2>

            <div className="hidden h-px flex-1 bg-slate-200 sm:block" />

          </div>

          {/* Company logos */}

          <div className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-7 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">

            {companyLogos.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className={`flex h-10 items-center justify-center whitespace-nowrap ${company.className}`}
              >
                {company.name}
              </div>
            ))}

          </div>

        </div>

        {/* Divider */}

        <div className="mt-8 h-px bg-slate-100" />

        <div className="grid gap-10 py-8 md:grid-cols-[1.1fr_.9fr] md:items-start md:gap-14 lg:py-10">

          {/* LEFT CONTENT */}

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2563eb]">
              The Engagement
            </p>

            <h2 className="mt-2 max-w-[570px] text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#071d63] sm:text-[40px]">
              You need engineers who fit into your team, not another team to manage.
            </h2>

            <p className="mt-4 max-w-[590px] text-[15px] leading-[1.55] text-[#5d6470]">
              Your engineers shouldn’t have to adapt to someone else's methods.
              Augmented engineers join your standups, work from your backlog,
              commit to your repositories, and follow your release process.
              They work like engineers you've hired, not a separate vendor
              operating alongside you.
            </p>

          </div>

          {/* RIGHT CARD */}

          <div className="rounded-[18px] border-2 border-[#2864ed] bg-white p-5 shadow-[0_10px_30px_rgba(37,99,235,0.10)] sm:p-6">

            <h3 className="text-[16px] font-bold uppercase text-[#2864ed]">
              What is staff augmentation?
            </h3>

            <p className="mt-3 text-[14px] leading-[1.5] text-[#626875]">
              Staff augmentation is an engagement model where pre-vetted
              engineers join your existing team under your management,
              processes, and tools. The vendor handles employment, payroll,
              HR compliance, and replacement SLA. Your sprint board doesn't
              change. Your release process doesn't change. The only difference
              is additional engineering capacity.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom border */}
      <div className="h-[3px] bg-[#071d63]" />

    </section>
  );
}