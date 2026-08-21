export default function About() {
  return (
    <div className="pt-24">

      <section className="bg-brand-950 py-24 text-white">

        <div className="section-shell">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">
            Company
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-tight">
            Engineering velocity, without compromise.
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-white/70">
            We connect businesses with vetted engineering talent
            and provide the operational layer that makes
            distributed teams dependable.
          </p>

        </div>

      </section>

      <section className="section-shell py-20">

        <div className="grid gap-8 md:grid-cols-3">

          {[
            ["20+", "Years of software delivery"],
            ["675+", "Active engineers"],
            ["1,440+", "Projects delivered"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-3xl border border-slate-200 p-8"
            >

              <div className="text-4xl font-extrabold text-blue-600">
                {value}
              </div>

              <div className="mt-2 text-sm text-slate-600">
                {label}
              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}