"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function AboutPage() {
  const { openModal } = useConsultationModal();

  const coreValues = [
    {
      title: "Innovation First",
      desc: "We pioneer cutting-edge AI methodologies, cloud architectures, and growth tactics to keep our clients ahead.",
      icon: Sparkles,
    },
    {
      title: "Uncompromising Integrity",
      desc: "Complete transparency, strict data privacy compliance, and radical honesty in every engagement.",
      icon: ShieldCheck,
    },
    {
      title: "Customer Success",
      desc: "We align our goals with your financial metrics, measuring success solely by your revenue growth and ROI.",
      icon: Heart,
    },
    {
      title: "Future Vision",
      desc: "Building sustainable, enterprise-grade technology ecosystems designed to thrive over decades.",
      icon: Eye,
    },
  ];

  const leadershipTeam = [
    {
      name: "Vikram Solutions",
      role: "Founder & Chief Executive Officer",
      bio: "20+ years of tech enterprise consulting experience leading digital transformation for Fortune 500 organizations across North America.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Elena Rostova",
      role: "Chief AI & Technology Officer",
      bio: "Former Principal AI Scientist with PhD in Computer Vision and Natural Language Processing. Oversees V Soft's AI labs.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Marcus Vance",
      role: "Head of Digital Marketing Strategy",
      bio: "PPC & SEO growth architect who has managed over $60M in enterprise advertising spend with an average 4.8x verified ROAS.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Sarah Jenkins",
      role: "VP of HR & Talent Acquisition",
      bio: "Specializes in executive placement and workforce scaling for rapidly growing technology startups and mid-market enterprises.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const timeline = [
    { year: "2011", title: "Company Inception", desc: "Founded in San Jose, CA as a boutique IT consulting firm." },
    { year: "2015", title: "Digital Marketing Expansion", desc: "Launched dedicated performance marketing practice." },
    { year: "2019", title: "HR Consulting Division", desc: "Acquired executive talent firm to offer full-suite HR consulting." },
    { year: "2023", title: "AI Labs Launch", desc: "Established dedicated Enterprise AI & Machine Learning division." },
    { year: "2026", title: "500+ Enterprise Milestone", desc: "Recognized as top US technology consulting partner across 10 industries." },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="hero-about-bg text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" /> About V Soft Solution LLC
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              A Trusted Technology & Strategy Partner Since 2011
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              We bridge the gap between complex emerging technology and measurable business growth for startups, medium businesses, and Fortune 500 enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-dark">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower global organizations by deploying high-impact AI automation, high-ROI digital marketing, and world-class workforce talent that drive long-term competitive advantage.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-brand-dark">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be North America&apos;s premier corporate consulting partner, renowned for technical excellence, operational integrity, and transformative digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-brand-light border border-gray-200/80 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-accent flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              15 Years of Excellence & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-3xl font-black text-brand-accent">{item.year}</div>
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-xs text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Executive Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm space-y-4 p-6 text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-brand-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-brand-dark">{member.name}</h3>
                  <p className="text-xs font-semibold text-brand-primary">{member.role}</p>
                </div>
                <p className="text-xs text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 cta-bg-image text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Partner With V Soft Solution LLC
          </h2>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Get In Touch Today
          </button>
        </div>
      </section>
    </div>
  );
}
