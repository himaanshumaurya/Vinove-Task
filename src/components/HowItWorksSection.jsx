import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionItems = [
  {
    title: "Governance",
    content:
      "Your team retains technical and delivery ownership while engineers work within your existing processes, tools, sprint ceremonies, and engineering standards.",
  },
  {
    title: "Billing",
    content:
      "Billing is structured around the engineering capacity you use, with transparent engagement terms and no unnecessary changes to your existing workflow.",
  },
  {
    title: "Ramp Speed",
    content:
      "Start with one engineer or a small group and scale the team as your roadmap and engineering capacity requirements grow.",
  },
];

export default function HowItWorksSection() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#071d63] text-white">

      {/* Background gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071d63] via-[#0a236d] to-[#17468e]" />

      {/* Decorative bottom-left shapes */}

      <div className="absolute bottom-0 left-0 h-[150px] w-[280px] opacity-20">

        <div className="absolute bottom-0 left-0 h-[52px] w-[92px] rounded-tr-[55px] bg-blue-400/20" />

        <div className="absolute bottom-0 left-[93px] h-[94px] w-[94px] bg-blue-400/20" />

        <div className="absolute bottom-[42px] left-[93px] h-[55px] w-[94px] bg-blue-300/20" />

        <div className="absolute bottom-0 left-[188px] h-[52px] w-[94px] rounded-tl-[55px] bg-blue-400/20" />

        <div className="absolute bottom-[42px] left-[0px] h-[52px] w-[92px] rounded-tr-[55px] bg-blue-300/20" />

      </div>

      {/* Main content */}

      <div className="relative mx-auto max-w-[1160px] px-6 py-16 sm:px-10 md:py-20 lg:px-16">

        <div className="grid gap-12 md:grid-cols-[.92fr_1.08fr] md:gap-16">

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#67a4ff]">
              How It Works
            </p>

            <h2 className="mt-2 max-w-[510px] text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px] text-white sm:text-[40px]">
              Individuals, pairs, or small groups – on your tools, your cadence
            </h2>

            <p className="mt-5 max-w-[500px] text-[15px] leading-[1.6] text-white/85">
              Your engineering process stays the same. The only thing that
              changes is who joins your team. You manage delivery. We handle
              employment, HR, and replacements while engineers work inside
              your existing workflows.
            </p>

          </div>

          <div>

            {/* Team Composition */}

            <div className="pb-6">

              <h3 className="text-[18px] font-bold text-white">
                Team Composition
              </h3>

              <p className="mt-3 max-w-[500px] text-[13px] leading-[1.6] text-white/90">
                Individuals, pairs, or small groups of 3–5. Each engineer is
                matched to your stack - Java/Spring Boot, Python, React,
                Node.js, Data Engineering, QA Automation, or DevOps/Cloud.
                Start with one engineer or add a small group. Scale capacity
                as your roadmap grows.
              </p>

            </div>

            {/* Accordion */}

            <div className="border-t border-white/30">

              {accordionItems.map((item, index) => {

                const isOpen = openItem === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-white/30"
                  >

                    {/* Accordion header */}

                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between text-left"
                    >

                      <span className="py-6 text-[18px] font-medium text-white">
                        {item.title}
                      </span>

                      <span
                        className={`flex h-12 w-11 shrink-0 items-center justify-center border-l border-white/20 transition ${
                          isOpen
                            ? "bg-blue-500/20"
                            : "bg-white/[0.02]"
                        }`}
                      >

                        <ChevronDown
                          size={22}
                          strokeWidth={1.5}
                          className={`text-blue-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />

                      </span>

                    </button>

                    {/* Accordion content */}

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5"
                          : "grid-rows-[0fr]"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <p className="max-w-[600px] pr-14 text-[13px] leading-6 text-white/70">
                          {item.content}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}