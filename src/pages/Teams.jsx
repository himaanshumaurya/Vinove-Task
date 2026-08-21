import { Check } from "lucide-react";

const roles = [
  "React / Next.js",
  "Node.js / Express",
  "Python / Django",
  "Java / Spring",
  "QA Automation",
  "DevOps / Cloud",
];

export default function Teams() {
  return (
    <div className="pt-24">

      <section className="bg-brand-950 py-24 text-white">

        <div className="section-shell">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">
            Hire & Teams
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight">
            Vetted engineers that fit your workflow.
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-white/70">
            Choose individual specialists or build a complete
            engineering pod around your roadmap.
          </p>

        </div>

      </section>

      <section className="section-shell py-20">

        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">

          <div>

            <h2 className="text-3xl font-extrabold">
              Popular engineering roles
            </h2>

            <div className="mt-7 grid gap-3">

              {roles.map((role) => (

                <div
                  key={role}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4"
                >

                  <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 text-emerald-600">

                    <Check size={15} />

                  </span>

                  <span className="font-semibold">
                    {role}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-[32px] bg-slate-50 p-8">

            <p className="text-sm font-bold text-blue-600">
              TEAM MODEL
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Your process. Your standards. Our staffing layer.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Engineers plug into your existing rituals:
              standups, sprint planning, architecture, pull
              requests and retrospectives. You keep technical
              ownership while we manage staffing operations.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}