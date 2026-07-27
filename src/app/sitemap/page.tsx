"use client";

import React from "react";
import Link from "next/link";
import { Globe2, ArrowRight, ShieldCheck, Cpu, Megaphone, Users, Laptop, Building2 } from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function SitemapPage() {
  const { openModal } = useConsultationModal();

  const siteMapSections = [
    {
      title: "Main Corporate Pages",
      icon: Building2,
      links: [
        { name: "Home Page", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "AI Solutions & Automation",
      icon: Cpu,
      links: [
        { name: "AI Solutions Practice Overview", href: "/ai-solutions" },
        { name: "Custom LLMs & RAG Engines", href: "/ai-solutions#custom-ai" },
        { name: "Autonomous AI Agents", href: "/ai-solutions#agents" },
        { name: "Document AI & OCR Automation", href: "/ai-solutions#doc-ai" },
      ],
    },
    {
      title: "Digital Marketing & Growth",
      icon: Megaphone,
      links: [
        { name: "Digital Marketing Overview", href: "/digital-marketing" },
        { name: "Search Engine Optimization (SEO)", href: "/digital-marketing#seo" },
        { name: "Google & Meta PPC Ads", href: "/digital-marketing#ppc" },
        { name: "LinkedIn B2B Marketing (ABM)", href: "/digital-marketing#abm" },
      ],
    },
    {
      title: "HR Consulting & Talent",
      icon: Users,
      links: [
        { name: "HR Consulting Overview", href: "/hr-consulting" },
        { name: "Executive Search & Recruiting", href: "/hr-consulting#executive-search" },
        { name: "HR Operations & Global Payroll", href: "/hr-consulting#hro" },
        { name: "Compliance & Risk Auditing", href: "/hr-consulting#compliance" },
      ],
    },
    {
      title: "IT & Software Services",
      icon: Laptop,
      links: [
        { name: "Cloud Migration & DevOps", href: "/ai-solutions#cloud" },
        { name: "Custom Software Engineering", href: "/ai-solutions#software" },
        { name: "Cybersecurity Audits", href: "/ai-solutions#security" },
      ],
    },
    {
      title: "Legal & Security",
      icon: ShieldCheck,
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security & Compliance Center", href: "/security" },
        { name: "Sitemap Directory", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-4 h-4" /> Navigation Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            V Soft Solution LLC Sitemap
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Complete Directory of Enterprise Practice Areas, Services, and Legal Documentation
          </p>
        </div>
      </section>

      {/* SITEMAP GRID */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteMapSections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-brand-dark text-lg">{sec.title}</h3>
                  </div>

                  <ul className="space-y-2.5 text-sm text-gray-600">
                    {sec.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="hover:text-brand-primary font-medium flex items-center gap-2 group transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Looking for a Specific Consulting Capability?</h3>
          <button
            onClick={() => openModal()}
            className="px-8 py-3 rounded-xl btn-gradient text-white font-bold text-sm"
          >
            Schedule Consultation Call
          </button>
        </div>
      </section>
    </div>
  );
}
