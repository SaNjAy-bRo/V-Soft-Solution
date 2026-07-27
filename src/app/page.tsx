"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Megaphone,
  Users,
  Laptop,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Globe2,
  Lock,
  Headphones,
  Star,
  ChevronRight,
  Stethoscope,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Home as HomeIcon,
  Factory,
  Building,
  Truck,
  FileCheck,
  Building2,
} from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function HomePage() {
  const { openModal } = useConsultationModal();
  const [activeProcessTab, setActiveProcessTab] = useState(0);

  const trustedLogos = [
    { name: "Google" },
    { name: "Microsoft" },
    { name: "AWS" },
    { name: "Meta" },
    { name: "Salesforce" },
    { name: "HubSpot" },
    { name: "Oracle" },
    { name: "IBM" },
    { name: "Cisco" },
    { name: "Adobe" },
  ];

  const primaryServices = [
    {
      id: "ai",
      title: "AI Solutions & Automation",
      subtitle: "Custom LLMs, Machine Learning & Autonomous Agents",
      icon: Cpu,
      link: "/ai-solutions",
      color: "from-blue-600 to-cyan-500",
      features: ["Custom LLM & RAG Integration", "Autonomous Agent Workflows", "Predictive Analytics", "Document & OCR AI"],
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      subtitle: "Data-Driven Omnichannel Growth Strategy",
      icon: Megaphone,
      link: "/digital-marketing",
      color: "from-blue-500 to-indigo-600",
      features: ["Technical SEO & Search Dominance", "Google & LinkedIn PPC Ads", "Conversion Optimization (CRO)", "Executive Brand Strategy"],
    },
    {
      id: "hr",
      title: "HR Consulting & Talent",
      subtitle: "Executive Search & Strategic Workforce Planning",
      icon: Users,
      link: "/hr-consulting",
      color: "from-cyan-500 to-blue-600",
      features: ["Executive Search & Recruiting", "HR Ops & Global Payroll", "Labor Compliance Audits", "Corporate Leadership Training"],
    },
    {
      id: "it",
      title: "IT Consulting & Engineering",
      subtitle: "Scalable Cloud Architecture & Custom Software",
      icon: Laptop,
      link: "/ai-solutions#it-services",
      color: "from-indigo-600 to-blue-700",
      features: ["Cloud Migration & DevOps", "Enterprise Software Engineering", "Cybersecurity Risk Audits", "24/7 Managed Infrastructure"],
    },
  ];

  const whyChooseUs = [
    {
      title: "15+ Years Industry Leadership",
      desc: "Senior partner-led engagements with deep domain expertise across North American and global enterprise markets.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Measurable Revenue Impact",
      desc: "Every engagement is anchored to verifiable business metrics—ROAS, Cost-Per-Acquisition, and operational savings.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Enterprise Data Protection",
      desc: "SOC 2 Type II compliant standards, HIPAA-ready protocols, and strict ISO 27001 data governance.",
      icon: Lock,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "AI Innovation Pioneers",
      desc: "Early deployment of proprietary generative models, RAG vector architectures, and autonomous agent systems.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Scalable Cloud Engineering",
      desc: "Cloud-native microservice architectures engineered to support millions of concurrent interactions effortlessly.",
      icon: Globe2,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "24/7 Account & Tech Support",
      desc: "Dedicated senior consultants and 24/7 infrastructure monitoring for operational peace of mind.",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const industries = [
    { name: "Healthcare", icon: Stethoscope, desc: "HIPAA-compliant AI & health data systems" },
    { name: "Finance & Banking", icon: Landmark, desc: "Fraud detection & fintech software" },
    { name: "Retail & E-Commerce", icon: ShoppingBag, desc: "Omnichannel growth & predictive inventory" },
    { name: "Manufacturing", icon: Factory, desc: "Supply chain automation & IoT analytics" },
    { name: "Education", icon: GraduationCap, desc: "EdTech platforms & student analytics" },
    { name: "Real Estate", icon: HomeIcon, desc: "PropTech software & lead funnels" },
    { name: "Government", icon: Building, desc: "Secure public sector IT modernization" },
    { name: "Technology", icon: Cpu, desc: "SaaS engineering & AI integration" },
    { name: "Logistics", icon: Truck, desc: "Route optimization & fleet tracking" },
    { name: "Insurance", icon: FileCheck, desc: "Automated underwriting & claims AI" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Operational Audit",
      desc: "We analyze your technology stack, market positioning, workforce bottlenecks, and growth objectives.",
    },
    {
      number: "02",
      title: "Strategic Architecture",
      desc: "Our senior partners map out a clear blueprint with explicit KPIs, timeline milestones, and resource allocation.",
    },
    {
      number: "03",
      title: "Design & UX Prototyping",
      desc: "User-centric wireframing, enterprise system modeling, and security framework validation.",
    },
    {
      number: "04",
      title: "Engineering & Execution",
      desc: "Agile development sprints using cutting-edge frameworks, unit testing, and rigorous code audits.",
    },
    {
      number: "05",
      title: "Deployment & Integration",
      desc: "Zero-downtime production deployment with seamless integration into your CRM, ERP, and databases.",
    },
    {
      number: "06",
      title: "Optimization & Continuous Scale",
      desc: "Proactive model fine-tuning, performance monitoring, and ongoing executive consulting.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", desc: "For US & Global Brands" },
    { number: "98%", label: "Client Satisfaction", desc: "Verified Retainer Rate" },
    { number: "15+", label: "Years Experience", desc: "Technology Leadership" },
    { number: "120+", label: "Enterprise Clients", desc: "Growth & Fortune Companies" },
  ];

  const testimonials = [
    {
      quote: "V Soft Solution LLC transformed our operations by integrating custom AI automation. We saw a 55% reduction in workflow response time within 60 days.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Apex Global Financial",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
    {
      quote: "Their digital marketing team generated over $4.2M in qualified enterprise pipeline within two quarters through targeted SEO and LinkedIn strategy.",
      author: "Sarah Jenkins",
      role: "VP of Global Marketing",
      company: "OmniHealth Systems",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
    {
      quote: "Sourcing top 1% AI engineering talent was seamless with V Soft's HR team. They delivered pre-vetted executive candidates within 3 weeks.",
      author: "David Sterling",
      role: "Chief Executive Officer",
      company: "Nexus Logistics Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-0 overflow-hidden">
      {/* PERFECTLY PROPORTIONED HERO SECTION (FITS 100% IN INITIAL VIEWPORT) */}
      <section className="relative min-h-[85vh] hero-bg-image pt-28 pb-12 md:pt-32 md:pb-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-5">
            {/* Clean Enterprise Badge (No AI Sparkles Icon) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl">
              <Building2 className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                US Enterprise Technology & Consulting Partner
              </span>
            </div>

            {/* Proportioned Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforming Enterprises Through{" "}
              <span className="text-gradient">Artificial Intelligence,</span> Digital Growth & Workforce Strategy
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed">
              V Soft Solution LLC delivers custom AI automation, performance digital marketing, executive talent acquisition, and cloud software engineering for forward-thinking organizations.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-gradient text-white font-extrabold text-sm uppercase tracking-wider shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book Free Consultation
              </button>

              <Link
                href="/ai-solutions"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm backdrop-blur-xl flex items-center justify-center gap-2 transition-all"
              >
                Explore Services <ArrowRight className="w-4 h-4 text-brand-accent" />
              </Link>
            </div>

            {/* Floating Metric Badges */}
            <div className="pt-5 grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-white/15">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                <div className="text-xl font-black text-brand-accent">500+</div>
                <div className="text-[11px] font-semibold text-gray-300">Enterprise Deployments</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                <div className="text-xl font-black text-brand-accent">15+ Yrs</div>
                <div className="text-[11px] font-semibold text-gray-300">Industry Leadership</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                <div className="text-xl font-black text-brand-accent">98%</div>
                <div className="text-[11px] font-semibold text-gray-300">Client Retainer Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                <div className="text-xl font-black text-brand-accent">SOC 2</div>
                <div className="text-[11px] font-semibold text-gray-300">ISO 27001 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className="py-8 bg-brand-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
            Trusted by Leaders at Fortune 500 & High-Growth Companies
          </span>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative flex">
          <div className="flex animate-marquee gap-12 sm:gap-16 items-center">
            {trustedLogos.concat(trustedLogos).map((item, idx) => (
              <div
                key={idx}
                className="text-gray-400 hover:text-white transition-colors font-black text-lg tracking-widest uppercase opacity-70 hover:opacity-100 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-brand-accent" />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Four Specialized Enterprise Practice Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {primaryServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-card-hover hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-primary mt-1 mb-4">
                        {service.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-gray-100">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={service.link}
                      className="w-full py-3 px-4 rounded-xl bg-gray-50 group-hover:bg-brand-primary text-brand-dark group-hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-wider">
              The V Soft Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
              Why Choose V Soft Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-light rounded-3xl overflow-hidden border border-gray-200/80 hover:bg-white hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* High-Res Photography Header */}
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.opacity = '0';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-brand-dark/90 backdrop-blur-md border border-white/10 text-brand-accent flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="px-6 pb-6 space-y-2">
                      <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              Tailored Industry Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Domain Expertise Across 10 Sectors
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-brand-accent/50 transition-all duration-300 text-center space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 text-brand-accent mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Our 6-Step Transformation Process
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProcessTab(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeProcessTab === idx
                    ? "bg-brand-dark text-white border-brand-dark shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className={`text-xs font-bold ${activeProcessTab === idx ? "text-brand-accent" : "text-brand-primary"}`}>
                  PHASE {step.number}
                </div>
                <div className="text-sm font-bold mt-1 line-clamp-1">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-brand-primary/10 text-brand-primary font-bold text-xs">
                STEP {processSteps[activeProcessTab].number} OF 06
              </div>
              <h3 className="text-3xl font-extrabold text-brand-dark">
                {processSteps[activeProcessTab].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {processSteps[activeProcessTab].desc}
              </p>
            </div>
            <div className="lg:col-span-4 bg-brand-dark text-white rounded-2xl p-6 text-center space-y-4">
              <div className="text-5xl font-black text-brand-accent">
                {processSteps[activeProcessTab].number}
              </div>
              <button
                onClick={() => openModal()}
                className="w-full py-3 rounded-xl btn-gradient text-white text-sm font-bold shadow-md"
              >
                Discuss This Phase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-4xl sm:text-5xl font-black text-brand-accent">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              What Executive Leaders Say About V Soft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-brand-light rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary"
                  />
                  <div>
                    <h4 className="font-bold text-brand-dark text-base">{t.author}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                    <p className="text-xs font-semibold text-brand-primary">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 cta-bg-image text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Something Extraordinary Together?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Schedule a 1-on-1 discovery call with our senior enterprise consultants today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-9 py-4 rounded-xl btn-gradient text-white font-extrabold text-base shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-base backdrop-blur-md transition-all text-center"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
