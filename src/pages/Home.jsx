import {ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
import HeroVisual from "../components/HeroVisual";
import LogoStrip from "../components/LogoStrip";
import StatTicker from "../components/StatTicker";
import EngagementSection from "../components/EngagementSection";
import HowItWorksSection from "../components/HowItWorksSection";
import EngagementModelTable from "../components/EngagementModelTable";
import OnboardingProcess from "../components/OnboardingProcess";
import TeamScaleSection from "../components/TeamScaleSection";
import CaseStudies from "../components/CaseStudies";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import ConsultationPage from "../components/ConsultationPage";

export default function Home() {
  return (
    <div>

      <section className="relative min-h-[610px] overflow-hidden bg-[#071d63] text-white">

        <div className="hero-grid absolute inset-0 opacity-30" />

        <div className="hero-orb -left-52 -top-64" />

        <div className="hero-orb right-[-330px] top-20" />

        <div className="section-shell relative z-10 flex min-h-[610px] items-center pb-20 pt-28">

          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.04fr_.96fr]">

            {/* LEFT CONTENT */}

            <div className="max-w-[640px]">

              {/* Rating */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1.5 text-[10px] text-white/90">

                <span className="tracking-[2px] text-yellow-400">
                  ★★★★★
                </span>

                <span>
                  4.8/5 on Clutch · 200+ reviews
                </span>

              </div>

              {/* Heading */}

              <h1 className="mt-5 max-w-[620px] text-5xl font-extrabold leading-[1.04] tracking-[-2px] sm:text-6xl lg:text-[54px]">

                Vetted Engineers

                <br />

                in{" "}

                <span className="text-blue-400">
                  Your Team
                </span>

              </h1>

              {/* Description */}

              <p className="mt-5 max-w-[570px] text-sm leading-6 text-white/80 sm:text-[15px]">

                Need more engineering capacity but don't want
                another three-month hiring cycle? Get a vetted
                shortlist in 48 hours. Your architecture, sprint
                planning, and code reviews stay with your team
                while we handle hiring, employment, replacements,
                and staffing.

              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-[11px] font-bold transition hover:bg-blue-400"
                >
                  Talk to Us

                  <ArrowRight size={14} />

                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-[11px] font-bold transition hover:bg-white hover:text-brand-950"
                >
                  Book a Call

                  <ArrowRight size={14} />

                </Link>

              </div>

              <LogoStrip />

            </div>

            {/* RIGHT VISUAL */}

            <HeroVisual />

          </div>

        </div>

        <StatTicker />

      </section>

      <EngagementSection />

      <HowItWorksSection />

      <EngagementModelTable />

      <OnboardingProcess />

      <TeamScaleSection />

      <CaseStudies />

      <FAQSection />

      <FinalCTA />

      <ConsultationPage />

    </div>
  );
}