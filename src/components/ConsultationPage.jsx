import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  Award,
  Users,
  ChevronDown,
  ChevronRight,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";

export default function ConsultationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stats = [
    {
      icon: Clock3,
      title: "21+ years of experience",
      sub: "We can handle projects",
    },
    {
      icon: Award,
      title: "2500+ satisfied customers",
      sub: "Startups to Fortune 500.",
    },
    {
      icon: Users,
      title: "675+ in-house team",
      sub: "Ensure your digital success.",
    },
  ];

  const partners = [
    "Microsoft",
    "AWS",
    "Google",
    "Clutch",
    "CMMI",
    "Deloitte",
    "Android",
    "Retail",
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-[#25282d]">
      {/* Mobile menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed right-4 top-4 z-50 rounded-lg border border-slate-200 bg-white p-2 lg:hidden"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="grid min-h-screen lg:grid-cols-[34.5%_65.5%]">
        <aside
          className={`bg-[#f1f2f5] ${
            menuOpen
              ? "fixed inset-y-0 left-0 z-40 w-80"
              : "fixed inset-y-0 left-0 z-40 w-80 -translate-x-full"
          } p-8 transition-transform lg:static lg:w-auto lg:translate-x-0`}
        >
          <div className="mx-auto flex h-full w-full max-w-[330px] flex-col justify-center">
            {/* Contact links */}
            <div className="flex items-center gap-2 whitespace-nowrap text-[12px] text-[#34383d]">
              <a
                href="#"
                className="flex items-center gap-1 underline decoration-dotted underline-offset-2"
              >
                <Phone size={14} />
                Book A Call
              </a>

              <span className="text-slate-400">|</span>

              <a
                href="#"
                className="flex items-center gap-1 underline decoration-dotted underline-offset-2"
              >
                <MessageCircle
                  size={14}
                  className="fill-green-500 text-green-500"
                />
                WhatsApp
              </a>

              <span className="text-slate-400">|</span>

              <a
                href="#"
                className="flex items-center gap-1 underline decoration-dotted underline-offset-2"
              >
                <Mail size={14} />
                Email us
              </a>
            </div>

            {/* Left heading */}
            <h2 className="mt-8 text-[18px] font-normal leading-6">
              Startups & Fortune 500+ companies
            </h2>

            {/* Stats */}
            <div className="mt-5 space-y-4">
              {stats.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-3"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#e6e7eb] text-[#858a92]">
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[16px] leading-5 text-[#777c84]">
                      {title}
                    </p>

                    <p className="mt-0.5 text-[12px] text-[#8b9098]">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner cards */}
            <div className="mt-12 grid grid-cols-4 gap-2">
              {partners.map((name) => (
                <div
                  key={name}
                  className="flex h-[42px] items-center justify-center bg-[#e5e6e9] px-1 text-center text-[9px] font-semibold text-[#5f646b]"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex items-center px-6 py-10 sm:px-10 lg:px-11 xl:px-12">
          <div className="w-full max-w-[685px]">
            {/* Heading */}
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-1.5px] text-[#202328]">
              Book Free Consultation
            </h1>

            <p className="mt-3 text-[16px] text-[#686d75]">
              Guaranteed response within 8 business hours.
            </p>

            {/* Form */}
            <form className="mt-10 space-y-7">
              {/* Row 1 */}
              <div className="grid gap-5 md:grid-cols-2">
                <FloatingField
                  label="Full Name"
                  placeholder="Enter Your Name"
                  autoFocus
                />

                <FloatingField
                  label="Email"
                  placeholder="Enter Your Email"
                  type="email"
                />
              </div>

              {/* Row 2 */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Phone */}
                <label className="relative block">
                  <span className="absolute -top-[8px] left-3 z-10 bg-white px-1 text-[12px] text-[#777d86]">
                    Phone No.
                  </span>

                  <div className="flex h-12 items-center rounded-[5px] border border-[#e5e7eb] px-3 transition focus-within:border-[#444]">
                    <span className="mr-1 text-[14px]">
                      🇮🇳
                    </span>

                    <span className="text-[14px]">
                      +91
                    </span>

                    <ChevronDown
                      size={15}
                      className="ml-1 text-[#30343a]"
                    />

                    <input
                      type="tel"
                      placeholder="(Optional)"
                      className="ml-2 min-w-0 flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#777d86]"
                    />
                  </div>
                </label>

                {/* Country */}
                <label className="relative block">
                  <span className="absolute -top-[8px] left-3 z-10 bg-white px-1 text-[12px] text-[#777d86]">
                    Select Country
                  </span>

                  <div className="relative flex h-12 items-center rounded-[5px] border border-[#e5e7eb] px-3">
                    <select className="w-full appearance-none bg-transparent text-[14px] text-[#777d86] outline-none">
                      <option>Select your Country</option>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 text-[#777d86]"
                    />
                  </div>
                </label>
              </div>

              {/* Requirements */}
              <label className="relative block">
                <span className="absolute -top-[8px] left-3 z-10 bg-white px-1 text-[12px] text-[#777d86]">
                  Your Requirements
                </span>

                <textarea
                  rows={5}
                  className="block h-[130px] w-full resize-none rounded-[5px] border border-[#e5e7eb] p-4 text-[14px] outline-none transition focus:border-[#444]"
                />

                <span className="absolute bottom-3 left-3 rounded border border-[#e0e2e5] bg-[#fafafa] px-2 py-1 text-[10px] text-[#7c8189]">
                  Browse | Drop Files Here
                </span>
              </label>

              {/* Captcha + Submit */}
              <div className="flex items-center justify-between gap-5">
                {/* Captcha */}
                <div className="flex items-center gap-3">
                  <div className="flex h-[50px] w-[176px] items-center justify-center rounded-[5px] border border-dashed border-[#d0d2d6]">
                    <span className="text-[18px] tracking-[7px] text-[#666b72]">
                      9 + 7
                    </span>

                    <RefreshCw
                      size={18}
                      strokeWidth={1.8}
                      className="ml-3 text-[#686e76]"
                    />
                  </div>

                  <span className="text-[18px] text-[#555b63]">
                    =
                  </span>

                  <input
                    aria-label="Captcha answer"
                    className="h-[50px] w-[50px] rounded-[5px] border border-[#d4d6da] text-center text-[15px] outline-none focus:border-[#555]"
                    placeholder="??"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex h-[38px] items-center gap-3 rounded-full border border-[#d7d9dd] px-4 text-[13px] text-[#626770] transition hover:border-[#555] hover:text-[#222]"
                >
                  Enquire Now
                  <ChevronRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function FloatingField({
  label,
  placeholder,
  type = "text",
  autoFocus = false,
}) {
  return (
    <label className="relative block">
      <span className="absolute -top-[8px] left-3 z-10 bg-white px-1 text-[12px] text-[#777d86]">
        {label}
      </span>

      <input
        autoFocus={autoFocus}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-[5px] border border-[#e5e7eb] px-3 text-[14px] text-[#34383d] outline-none transition placeholder:text-[#858a92] focus:border-[#444]"
      />
    </label>
  );
}