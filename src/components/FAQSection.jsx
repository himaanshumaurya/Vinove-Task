import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How quickly can engineers join our team?",
    answer:
      "Once the requirements are confirmed, we can typically share relevant engineer profiles quickly and coordinate interviews based on your availability.",
  },
  {
    question: "Can we interview engineers before making a decision?",
    answer:
      "Yes. You can interview the shortlisted engineers and make the final selection based on your team's requirements.",
  },
  {
    question: "How does billing work for Team Extension?",
    answer:
      "Billing is straightforward and based on the engineers you engage, with monthly invoicing and no long-term hiring commitments. You can scale your team up or down as project priorities change, giving you flexibility without the administrative burden of permanent hiring.",
  },
  {
    question: "What happens if an engineer leaves or isn't the right fit?",
    answer:
      "If an engineer leaves or is not the right fit, we can help identify a suitable replacement so your project continues without unnecessary disruption.",
  },
  {
    question: "Will engineers work within our existing tools and processes?",
    answer:
      "Yes. Engineers integrate with your existing tools, communication channels, development workflows, and engineering processes.",
  },
  {
    question: "Is Team Extension the right engagement model for our team?",
    answer:
      "Team Extension works well when you want to add engineering capacity while retaining control over your team's processes, priorities, and day-to-day management.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 lg:px-[76px] lg:py-[95px]">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -bottom-[100px] -left-[55px] h-[280px] w-[420px] opacity-[0.25]">
        <div className="absolute left-0 top-0 h-[145px] w-[145px] rounded-full bg-[#f8f9fc]" />

        <div className="absolute left-[130px] top-[5px] h-[145px] w-[145px] bg-[#fafbfc]" />

        <div className="absolute left-[65px] top-[115px] h-[145px] w-[145px] rounded-full bg-[#f8f9fc]" />

        <div className="absolute left-[260px] top-[80px] h-[145px] w-[145px] rounded-full bg-[#fafbfc]" />
      </div>

      <div className="relative mx-auto max-w-[1070px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-[40px]">
          {/* Left content */}
          <div>
            <h2 className="max-w-[330px] text-[38px] font-bold leading-[1.25] tracking-[-1px] text-[#0b2056]">
              Frequently Asked{" "}
              <span className="block text-[#2864d7]">Questions</span>
            </h2>

            <p className="mt-3 max-w-[350px] text-[15px] leading-[1.55] text-[#696d78]">
              Here is the list of some of the most common questions we hear
              before any engagement. If your query is not listed here, contact
              us and we will get back to you within 24 hours.
            </p>
          </div>

          {/* FAQ list */}
          <div className="w-full">
            <div className="space-y-[7px]">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-[7px] border transition-colors duration-200 ${
                      isOpen
                        ? "border-[#6b9cff]"
                        : "border-[#e9e9ed]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      className={`flex min-h-[55px] w-full items-center justify-between px-[15px] text-left transition-colors ${
                        isOpen
                          ? "bg-[#f7f9ff] text-[#2864ed]"
                          : "bg-white text-[#202127] hover:bg-[#fafbfc]"
                      }`}
                    >
                      <span className="text-[14px] font-medium leading-5">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={16}
                        strokeWidth={1.7}
                        className={`ml-4 shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-[#737984]"
                            : "text-[#737984]"
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[#d8e2ff] px-[15px] pb-[16px] pt-[13px]">
                          <p className="text-[13px] leading-[1.6] text-[#696d78]">
                            {faq.answer}
                          </p>
                        </div>
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
};

export default FAQSection;