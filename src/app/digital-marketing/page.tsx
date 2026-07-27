"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Megaphone,
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  TrendingUp,
  BarChart3,
  Award,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Zap,
} from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function DigitalMarketingPage() {
  const { openModal } = useConsultationModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      desc: "Technical SEO audits, high-intent keyword clustering, and authority backlink acquisition driving top Google rankings.",
    },
    {
      title: "Google Ads (PPC)",
      icon: Target,
      desc: "Precision paid search, Shopping, and Display campaigns designed to capture commercial buyer intent with high ROAS.",
    },
    {
      title: "Meta Ads (Facebook & IG)",
      icon: Share2,
      desc: "High-converting ad creatives, lookalike audience modeling, and retargeting funnels that scale lead volume.",
    },
    {
      title: "LinkedIn B2B Marketing",
      icon: Megaphone,
      desc: "Account-Based Marketing (ABM) targeting C-suite executives, decision makers, and enterprise buyers.",
    },
    {
      title: "Content Marketing",
      icon: FileText,
      desc: "Authority whitepapers, technical articles, and case studies positioning your brand as the industry leader.",
    },
    {
      title: "Email Marketing & Nurturing",
      icon: Mail,
      desc: "Automated drip sequences, subscriber segmentation, re-engagement campaigns, and newsletter strategy.",
    },
    {
      title: "Conversion Optimization (CRO)",
      icon: TrendingUp,
      desc: "A/B split testing, heatmaps, user behavior analysis, and friction reduction turning web visitors into clients.",
    },
    {
      title: "Marketing Automation",
      icon: Sparkles,
      desc: "Integration between HubSpot, Marketo, Salesforce, and custom CRM webhooks to automate lead scoring.",
    },
    {
      title: "Brand Strategy & Positioning",
      icon: Award,
      desc: "Corporate brand guidelines, messaging frameworks, competitive positioning, and visual identity design.",
    },
    {
      title: "Analytics & Custom BI Dashboards",
      icon: BarChart3,
      desc: "Attribution modeling, GA4 configuration, and real-time executive dashboards reporting transparent CAC & LTV.",
    },
  ];

  const resultsMetrics = [
    { label: "Average Client ROAS", value: "4.8x Return", desc: "Across B2B & B2C Paid Campaigns" },
    { label: "Organic Search Lift", value: "+210%", desc: "Average Traffic Growth in 6 Months" },
    { label: "Pipeline Value Generated", value: "$45M+", desc: "Verified Client Sales Opportunities" },
    { label: "Conversion Rate Improvement", value: "+65%", desc: "Post-CRO Optimization" },
  ];

  const faqs = [
    {
      q: "How does V Soft Solution LLC measure digital marketing success?",
      a: "We measure success directly by business impact: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Qualified Leads generated, and total revenue pipeline created.",
    },
    {
      q: "Which platforms do you specialize in for B2B Enterprise Lead Generation?",
      a: "For B2B enterprises, we heavily leverage LinkedIn ABM campaigns, high-intent Google Search PPC, Technical Organic SEO, and cold email outreach automation.",
    },
    {
      q: "Do you provide custom reporting dashboards?",
      a: "Yes. All clients receive access to a 24/7 real-time reporting dashboard connecting Google Analytics, Google Ads, Meta, LinkedIn, and your CRM for complete transparency.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="hero-marketing-bg text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Megaphone className="w-4 h-4" /> Performance Growth Agency
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Data-Driven Digital Marketing That Delivers Real Results
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              Scale your brand, dominate search engine rankings, and generate high-paying enterprise leads with our proven omnichannel marketing strategies.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => openModal("Digital Marketing")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-glow flex items-center justify-center gap-2"
              >
                Claim Free Marketing Audit <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS SHOWCASE */}
      <section className="py-16 bg-brand-dark text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {resultsMetrics.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-brand-accent">{m.value}</div>
                <div className="text-sm font-bold mt-1 text-white">{m.label}</div>
                <div className="text-xs text-gray-300 mt-1">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              10 Specialized Marketing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-primary/40 transition-all space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
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

      {/* INNOVATIVE SECTION 1: OMNICHANNEL GROWTH ARCHITECTURE */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Card with Revenue Dashboard */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-brand-accent rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
                <img
                  src="/images/marketing-growth-dashboard.png"
                  alt="Digital Marketing Revenue Growth Dashboard"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-gray-400">Average ROAS Engine</div>
                    <div className="text-sm font-extrabold text-white">4.8x Pipeline Multiplier</div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Live GA4 Tracking
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Growth Pillars */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Omnichannel Growth Engine
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Engineering Predictable B2B & Enterprise Growth
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We combine technical search optimization, targeted paid acquisition, high-converting creative assets, and automated lead scoring into a unified revenue machine.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: "Technical Organic Dominance", desc: "Top-tier search engine indexing, semantic content clusters, and high-DA backlink strategies." },
                  { title: "Account-Based Marketing (ABM)", desc: "Hyper-targeted LinkedIn campaigns reaching verified decision-makers at target enterprise accounts." },
                  { title: "High-ROAS Creative Testing Studio", desc: "Dynamic ad creative variations continuously optimized across Google Search, Display, and Meta." },
                  { title: "Frictionless Conversion Optimization", desc: "A/B landing page testing and heatmapping that maximizes conversion rates per visitor." },
                ].map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 transition-colors flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATIVE SECTION 2: ATTRIBUTION & MARKETING ROI MATRIX */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Comparison Matrix */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" /> Attribution & Transparency
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                360° Data Attribution: Zero Vanity Metrics
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Most agencies report on clicks and impressions. We track actual dollar values, Cost Per Acquisition (CPA), and pipeline revenue generated in real-time.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { feature: "Full-Funnel Multi-Touch Tracking", desc: "Attribute conversions across first touchpoint, nurture emails, and final call bookings." },
                  { feature: "Real-Time CAC & LTV Analytics", desc: "Live dashboards mapping exact Customer Acquisition Cost against Customer Lifetime Value." },
                  { feature: "HubSpot & Salesforce Integration", desc: "Seamless bi-directional data flow connecting marketing ad spend directly to closed-won deals." },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-brand-light border border-gray-200 hover:border-brand-primary transition-all space-y-1">
                    <h3 className="text-base font-bold text-brand-dark flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-primary" /> {item.feature}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Attribution HUD Graphic */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-brand-dark">
                <img
                  src="/images/analytics-attribution-hud.png"
                  alt="360 Data Attribution HUD"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-6 bg-brand-dark text-white space-y-2 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">Executive ROI Analytics Matrix</div>
                  <div className="text-sm font-semibold text-gray-300">Live multi-channel revenue attribution dashboard updated every hour.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Digital Marketing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-brand-dark flex items-center justify-between hover:bg-brand-light transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? "rotate-180 text-brand-primary" : "text-gray-400"}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 text-gray-600 text-sm border-t border-gray-100 bg-brand-light/50">
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
            Ready to Scale Your Revenue Pipeline?
          </h2>
          <button
            onClick={() => openModal("Digital Marketing")}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Get Free Strategy Proposal
          </button>
        </div>
      </section>
    </div>
  );
}
