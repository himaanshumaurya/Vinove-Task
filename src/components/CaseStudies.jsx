import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    category: "SAAS / FINTECH",
    title:
      "Series B FinTech Added 4 Backend Engineers Without Slowing an Active Release Cycle",
    description:
      "Managing a designer, Shopify contractor, SEO consultant, and PPC agency separately was costing FreshThread 12 hours a week in coordination. 6 months after consolidating with PixelCrayons.",
    image: "/images/fintech-case-study.png",
    stats: [
      {
        value: "4 engineers",
        label: "Added to an active team",
      },
      {
        value: "6 days",
        label: "Time to first PR merged",
      },
      {
        value: "18 mo",
        label: "Engagement duration",
      },
    ],
    highlighted: true,
  },
  {
    category: "ISV / HEALTHCARE",
    title:
      "Healthcare ISV Scaled QA Automation Capacity by 300% in Three Weeks Ahead of HIPAA Audit",
    description:
      "Orbit had hit their capacity ceiling. Turning away new clients wasn't sustainable, but taking on freelancers was producing inconsistent output.",
    image: "/images/healthcare-case-study.png",
    stats: [
      {
        value: "3×",
        label: "QA capacity increase",
      },
      {
        value: "21 days",
        label: "From brief to full capacity",
      },
      {
        value: "0",
        label: "Audit findings from augmented work",
      },
    ],
    highlighted: false,
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full bg-[#fcfcfd] px-6 py-14 lg:px-[76px] lg:py-[27px]">
      <div className="mx-auto max-w-[1070px]">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[2px] text-[#2164ed]">
              Proof
            </p>

            <h2 className="max-w-[600px] text-[36px] font-bold leading-[1.2] tracking-[-1px] text-[#0b2056] sm:text-[40px]">
              Engineering teams extended, shipping on their roadmap
            </h2>
          </div>

          <div className="flex items-start lg:pt-10">
            <p className="max-w-[330px] text-[15px] leading-[1.55] text-[#686c77]">
              Two representative engagements. Each started as a Team Extension
              and continued beyond the initial three months.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-[55px] grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className={`rounded-[15px] bg-white p-[31px] ${
                study.highlighted
                  ? "border border-[#3975f4] shadow-[0_4px_18px_rgba(39,100,232,0.10)]"
                  : "shadow-[0_4px_22px_rgba(20,35,70,0.08)]"
              }`}
            >
              {/* Image */}
              <div className="relative h-[210px] overflow-hidden rounded-[15px] bg-[#6197f8]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Category */}
              <p className="mt-[24px] text-[11px] font-medium uppercase tracking-[2px] text-[#2164ed]">
                {study.category}
              </p>

              {/* Title */}
              <h3 className="mt-[9px] text-[18px] font-medium leading-[1.35] tracking-[-0.2px] text-[#202127]">
                {study.title}
              </h3>

              {/* Description */}
              <p className="mt-[8px] text-[13px] leading-[1.6] text-[#696d78]">
                {study.description}
              </p>

              {/* Divider */}
              <div className="my-[27px] h-px w-full bg-[#e9e9eb]" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[19px] font-medium leading-6 text-[#202127]">
                      {stat.value}
                    </p>

                    <p className="mt-[6px] max-w-[100px] text-[11px] leading-[1.35] text-[#898d98]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Link */}
              <button
                type="button"
                className="group mt-[34px] flex items-center gap-2 text-[13px] font-medium text-[#2164ed]"
              >
                Read the case study

                <ArrowRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;