import {
  Code2,
  Cloud,
  Database,
  Smartphone,
  TestTube2,
  Wrench,
} from "lucide-react";

const services = [
  [
    Code2,
    "Web Engineering",
    "React, Next.js, Node.js and modern application architecture.",
  ],
  [
    Smartphone,
    "Mobile Engineering",
    "Cross-platform and native mobile teams for production products.",
  ],
  [
    Cloud,
    "Cloud & DevOps",
    "Cloud infrastructure, CI/CD, observability and deployment automation.",
  ],
  [
    Database,
    "Data Engineering",
    "Reliable data platforms, APIs, analytics and database systems.",
  ],
  [
    TestTube2,
    "QA & Automation",
    "Functional, integration and automated quality engineering.",
  ],
  [
    Wrench,
    "Dedicated Teams",
    "Long-term engineering pods aligned to your product roadmap.",
  ],
];

export default function Services() {
  return (
    <div className="pt-24">

      <section className="bg-brand-950 py-24 text-white">

        <div className="section-shell">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">
            Services
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Build the right team for the job.
          </h1>

        </div>

      </section>

      <section className="section-shell py-20">

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map(
            ([Icon, title, description]) => (

              <article
                key={title}
                className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon />
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  {title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>

              </article>

            )
          )}

        </div>

      </section>

    </div>
  );
}