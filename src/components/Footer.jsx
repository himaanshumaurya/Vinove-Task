export default function Footer() {
  const offices = [
    {
      flag: "🇺🇸",
      city: "New York, USA",
      address: (
        <>
          5900 Balcones Drive, STE100,
          <br />
          Austin, TX 78731
        </>
      ),
    },
    {
      flag: "🇬🇧",
      city: "London, UK",
      address: (
        <>
          167–169 Great Portland Street, 5th
          <br />
          Floor, London W1W 5PF
        </>
      ),
    },
    {
      flag: "🇦🇪",
      city: "Dubai, UAE",
      address: (
        <>
          541, 8W, Level 5, Dubai Airport
          <br />
          Free Zone
        </>
      ),
    },
    {
      flag: "🇮🇳",
      city: "Noida, India",
      address: (
        <>
          11th Floor, Max Square, Noida -
          <br />
          Greater Noida Expy, Sector 129
        </>
      ),
    },
  ];

  const columns = [
    {
      title: "Company",
      links: [
        "About",
        "In Media",
        "Case Studies",
        "Our Blog",
        "Clients & Testimonials",
      ],
    },
    {
      title: "Our Expertise",
      links: [
        "Software Product Engineering",
        "Application Development",
        "Staff Augmentation",
        "Cloud Services",
        "AI & ML",
      ],
    },
    {
      title: "Hire Developers",
      links: [
        "Hire AI Engineers",
        "Hire Backend Developers",
        "Hire Frontend Developers",
        "Hire Blockchain Developers",
        "Hire Mobile App Developers",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Offshore Development Center",
        "Offshore Software Development",
        "Nearshore Software Development",
      ],
    },
    {
      title: "Clients We Serve",
      links: ["For Startups", "For Enterprises"],
    },
  ];

  return (
    <footer className="w-full bg-[#1d2124] text-white">
      <div className="mx-auto max-w-[1010px] px-5 pt-10 pb-9">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div
              key={office.city}
              className="h-[92px] rounded-[7px] border border-[#373c40] px-2 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-[17px] leading-none">
                  {office.flag}
                </span>

                <span className="text-[14px] font-medium text-white">
                  {office.city}
                </span>
              </div>

              <div className="mt-2 text-[13px] leading-[21px] text-[#969ba1]">
                {office.address}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-[15px] font-semibold text-white">
                {column.title}
              </h3>

              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] leading-5 text-[#858a90] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {column.title === "Solutions" && (
                <div className="mt-7 flex items-center gap-2">
                  <span className="mr-1 whitespace-nowrap text-[14px] text-white">
                    Follow Us
                  </span>

                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-6 w-6 shrink-0  items-center justify-center rounded-full bg-[#898e96] text-[#1d2124] transition hover:bg-white"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.66.34-1 1-1z" />
                    </svg>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-6 w-6 shrink-0  items-center justify-center rounded-full bg-[#898e96] text-[#1d2124] transition hover:bg-white"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.85h1.73L8.27 4.05H6.41L17.8 19.85z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-6 w-6 shrink-0  items-center justify-center rounded-full bg-[#898e96] text-[#1d2124] transition hover:bg-white"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3C4.15 3 3.25 3.9 3.25 5s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20.44 13.4c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.41V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.28-6.6z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-6 w-6 shrink-0  items-center justify-center rounded-full bg-[#898e96] text-[#1d2124] transition hover:bg-white"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#898e96] text-[#1d2124] transition hover:bg-white"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.4.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.58 9.4.58 9.4.58s7.54 0 9.4-.58a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#111416] bg-[#080a0b]">
        <div className="mx-auto flex min-h-[30px] max-w-[1010px] items-center justify-center px-5 text-center">
          <p className="text-[10px] text-[#85898d]">
            Copyright © 2004 - 2026 ValueCoders, All Rights Reserved. A
            Vinove Company.
          </p>
        </div>
      </div>
    </footer>
  );
}