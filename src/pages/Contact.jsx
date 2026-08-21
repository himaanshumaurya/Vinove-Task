import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="pt-24">

      <section className="bg-brand-950 py-24 text-white">

        <div className="section-shell">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
            Tell us what you need to build.
          </h1>

        </div>

      </section>

      <section className="section-shell py-20">

        <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl sm:p-10">

          {submitted ? (

            <div className="py-12 text-center">

              <div className="text-2xl font-extrabold">
                Thanks — your request is ready.
              </div>

              <p className="mt-3 text-slate-600">
                Connect this form to your API or CRM to process
                the lead in production.
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <label className="grid gap-2 text-sm font-semibold">

                  Name

                  <input
                    required
                    className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                  />

                </label>

                <label className="grid gap-2 text-sm font-semibold">

                  Work email

                  <input
                    required
                    type="email"
                    className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                  />

                </label>

              </div>

              <label className="grid gap-2 text-sm font-semibold">

                What are you building?

                <textarea
                  required
                  rows="5"
                  className="rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-blue-500"
                />

              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500"
              >

                Request an Estimate

                <ArrowRight size={16} />

              </button>

            </form>

          )}

        </div>

      </section>

    </div>
  );
}