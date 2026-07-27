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
              End-to-End HR & Talent Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all space-y-4 group"
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
