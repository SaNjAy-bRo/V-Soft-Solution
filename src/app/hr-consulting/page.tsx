"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  UserCheck,
  Briefcase,
  ShieldCheck,
  Award,
  BookOpen,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function HRConsultingPage() {
  const { openModal } = useConsultationModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hrServices = [
    {
      title: "Talent Acquisition & Recruitment",
      icon: Users,
      desc: "Full-cycle recruitment strategies sourcing top 1% software engineers, AI researchers, product leaders, and executives.",
    },
    {
      title: "Executive Search & Headhunting",
      icon: UserCheck,
      desc: "Discreet executive placement for C-suite roles (CTO, CIO, VP of Engineering, CMO) with proven track records.",
    },
    {
      title: "HR Outsourcing (HRO)",
      icon: Briefcase,
      desc: "End-to-end administration of HR operations, onboarding, offboarding, and employee relations.",
    },
    {
      title: "Global Payroll & Benefits",
      icon: TrendingUp,
      desc: "Seamless global payroll integration, tax withholdings, healthcare benefit design, and retirement plan administration.",
    },
    {
      title: "HR Compliance & Risk Auditing",
      icon: ShieldCheck,
      desc: "Federal & State labor law compliance, handbook creation, EEOC adherence, and workplace safety protocols.",
    },
    {
      title: "Employee Engagement & Retention",
      icon: HeartHandshake,
      desc: "Culture surveys, retention frameworks, and remote workforce engagement programs that reduce voluntary turnover.",
    },
    {
      title: "Performance Management",
      icon: Award,
      desc: "Designing OKR & KPI evaluation frameworks, structured 360-degree review systems, and merit-based promotion tracks.",
    },
    {
      title: "Corporate Training & Upskilling",
      icon: BookOpen,
      desc: "Custom employee development workshops covering AI literacy, cloud technologies, agile project management, and leadership.",
    },
  ];

  const hiringTimeline = [
    { step: "01", title: "Role Discovery & Intake", desc: "Define technical skills, leadership competencies, budget, and culture fit." },
    { step: "02", title: "Active Talent Sourcing", desc: "Leverage proprietary database and passive candidate headhunting." },
    { step: "03", title: "Technical & Behavioral Vetting", desc: "Rigorous multi-stage interviews and portfolio validation." },
    { step: "04", title: "Shortlist Presentation", desc: "Present top 3 pre-vetted executive candidates within 14 business days." },
    { step: "05", title: "Offer Negotiation & Onboarding", desc: "Handle background checks, offer letters, and smooth integration." },
  ];

  const faqs = [
    {
      q: "What is your average placement time for Executive & Technical roles?",
      a: "Our average time-to-fill for senior engineering and technical roles is 18 days, and 25 days for C-suite executive search placements.",
    },
    {
      q: "Do you offer replacement guarantees for placed hires?",
      a: "Yes! All executive search placements come with a 90-day to 180-day 100% placement replacement guarantee.",
    },
    {
      q: "Can V Soft manage global remote team payroll and compliance?",
      a: "Absolutely. We support Employer of Record (EOR) and global HR compliance across 50+ international jurisdictions.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="hero-hr-bg text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" /> Strategic Workforce Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Building High-Performing Teams for Future Growth
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              Scale your organization with elite executive recruitment, streamlined HR outsourcing, payroll management, and corporate leadership development.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => openModal("HR Consulting")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-glow flex items-center justify-center gap-2"
              >
                Schedule Talent Strategy Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HR SERVICES */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              8 Enterprise HR Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-primary/40 transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INNOVATIVE SECTION 1: GLOBAL ELITE TALENT ECOSYSTEM */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Executive Talent Hub Image Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-brand-primary rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
                <img
                  src="/images/executive-talent-hub.png"
                  alt="Global Executive Leadership & Tech Talent Hub"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-gray-400">Verified Talent Pool</div>
                    <div className="text-sm font-extrabold text-white">Top 1% Global Software & AI Leadership</div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    18-Day Avg Fill
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Talent Ecosystem Pillars */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" /> Global Talent Network
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Headhunting Elite 1% Engineers & C-Suite Leaders
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We combine proprietary AI candidate sourcing with deep human executive vetting to connect your enterprise with transformational leaders and specialized engineers.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "Active Executive Headhunting", desc: "Direct outreach to gainfully employed, passive C-suite and VP candidates not on job boards." },
                  { title: "Rigorous Technical & Leadership Vetting", desc: "Multi-stage architecture interviews, leadership case studies, and culture-fit assessments." },
                  { title: "Employer of Record (EOR) & Payroll", desc: "Compliant global hiring across 50+ countries with automated payroll, benefits, and tax handling." },
                  { title: "Risk-Free Placement Guarantee", desc: "100% placement replacement guarantee from 90 to 180 days for all executive searches." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATIVE SECTION 2: 90-DAY ONBOARDING & RETENTION ACCELERATOR */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Strategy Breakdown */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" /> Retention Accelerator
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                Maximizing Executive Onboarding & 3-Year Retention
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Hiring is only half the battle. Our structured onboarding acceleration frameworks ensure executive hires hit key performance indicators faster and stay engaged long-term.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { phase: "Day 1 - 30", title: "Integration & 100-Day Action Plan", desc: "Define immediate high-leverage goals, stakeholder alignment, and team dynamics." },
                  { phase: "Day 31 - 60", title: "360 Check-ins & Early Win Delivery", desc: "Structured bi-weekly feedback loops resolving operational bottlenecks early." },
                  { phase: "Day 61 - 90", title: "Full Performance Autonomy & KPI Audit", desc: "Evaluate milestone achievements against executive scorecards and career growth tracks." },
                ].map((step, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-brand-light border border-gray-200 hover:border-brand-primary transition-all flex items-start gap-4">
                    <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-extrabold shrink-0 mt-0.5">
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-brand-dark">{step.title}</h3>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: HR Strategy Session Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-brand-primary rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-brand-dark">
                <img
                  src="/images/hr-strategy-session.png"
                  alt="Executive HR Strategy Session"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-6 bg-brand-dark text-white space-y-2 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Strategic Leadership Workspace</div>
                  <div className="text-sm font-semibold text-gray-300">Designing modern employee retention & organizational excellence.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Our 5-Step Executive Recruitment Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {hiringTimeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-brand-light border border-gray-200 space-y-3 relative">
                <div className="text-3xl font-black text-brand-primary">{item.step}</div>
                <h3 className="font-bold text-brand-dark text-base">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              HR & Recruitment FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-brand-dark flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? "rotate-180 text-brand-primary" : "text-gray-400"}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 text-gray-600 text-sm border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 cta-bg-image text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Need Top Executive Talent or HR Support?
          </h2>
          <button
            onClick={() => openModal("HR Consulting")}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Speak With HR Partners
          </button>
        </div>
      </section>
    </div>
  );
}
