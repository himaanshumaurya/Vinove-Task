const items = [
  "10-DAY REPLACEMENT GUARANTEE",
  "PROFILES IN 48 HOURS",
  "94% ON-TIME DELIVERY",
  "1440+ PROJECTS DELIVERED",
  "675+ ENGINEERS ACTIVE",
  "4.8★ ON CLUTCH",
  "20+ YEARS IN SOFTWARE",
];

export default function StatTicker() {
  const repeatedItems = [
    ...items,
    ...items,
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-yellow-400 bg-brand-950/95 py-3">

      <div className="marquee-track flex items-center gap-5 text-[9px] font-semibold tracking-wide text-white">

        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap"
          >
            {item}

            <span className="ml-5 text-yellow-400">
              •
            </span>
          </span>
        ))}

      </div>

    </div>
  );
}