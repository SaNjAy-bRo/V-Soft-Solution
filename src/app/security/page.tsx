"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Award, Server, Cpu, CheckCircle2, FileCheck } from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function SecurityPage() {
  const { openModal } = useConsultationModal();

  const securityPillars = [
    {
      title: "SOC 2 Type II Certified",
      desc: "Independently audited operational security controls covering availability, processing integrity, and confidentiality.",
      icon: Award,
    },
    {
      title: "ISO 27001 Governance",
      desc: "Certified Information Security Management Systems (ISMS) governing client data protection and risk mitigation.",
      icon: ShieldCheck,
    },
    {
      title: "AES-256 & TLS 1.3 Encryption",
      desc: "End-to-end data encryption at rest (AES-256) and in transit (TLS 1.3) across all cloud APIs and vector databases.",
      icon: Lock,
    },
    {
      title: "Isolated VPC Environments",
      desc: "Dedicated cloud tenant isolation on AWS & Azure ensuring zero data contamination between enterprise accounts.",
      icon: Server,
    },
    {
      title: "HIPAA & GDPR Compliance",
      desc: "Strict compliance standards supporting protected health information (PHI) and global data subject rights.",
      icon: FileCheck,
    },
    {
      title: "Continuous Threat Audit",
      desc: "Automated vulnerability scanning, penetration testing, and 24/7 SOC infrastructure monitoring.",
      icon: Cpu,
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Enterprise Security Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Security & Compliance Architecture
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Enterprise Data Protection, SOC 2 Type II Audits & Isolated AI Cloud Environments
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Our Security Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-4 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-dark text-brand-accent flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Request Our SOC 2 Audit Report & Security Whitepaper
          </h2>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Request Audit Documentation
          </button>
        </div>
      </section>
    </div>
  );
}
