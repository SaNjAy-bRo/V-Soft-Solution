"use client";

import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, Scale, Lock, CheckCircle2 } from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function TermsPage() {
  const { openModal } = useConsultationModal();

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" /> Terms of Service
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Master Consulting & Service Terms
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Governing Enterprise Technology Consulting, Software Engineering & HR Advisory Engagements
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">1. Acceptance of Terms</h2>
            <p>
              By accessing the website or engaging the services of V Soft Solution LLC (&quot;V Soft&quot;), you acknowledge that you have read, understood, and agree to be bound by these Master Terms of Service, along with any executed Statements of Work (SOW) or Master Services Agreements (MSA).
            </p>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">2. Scope of Enterprise Services</h2>
            <p>
              V Soft provides technology consulting services encompassing four primary practice areas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li><strong>AI Solutions & Automation:</strong> Custom LLM development, RAG vector pipelines, and autonomous workflow automation.</li>
              <li><strong>Digital Marketing:</strong> Technical SEO, Google/Meta Ads PPC management, and B2B LinkedIn ABM growth strategy.</li>
              <li><strong>HR Consulting & Talent:</strong> Executive recruitment, headhunting, HR operations, and global payroll management.</li>
              <li><strong>IT & Cloud Engineering:</strong> Cloud infrastructure migration (AWS/Azure), custom software development, and SOC2 audits.</li>
            </ul>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">3. Intellectual Property & Code Ownership</h2>
            <p>
              Upon full payment of invoice milestones specified in an active SOW:
            </p>
            <div className="p-6 rounded-2xl bg-brand-light border border-brand-primary/20 space-y-2">
              <div className="flex items-center gap-2 font-bold text-brand-dark text-base">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" /> 100% Client Ownership Guarantee
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                All custom software code, AI model fine-tuning weights, brand assets, and technical documentation developed specifically for the Client transfer fully to the Client as work-for-hire, free of third-party encumbrances.
              </p>
            </div>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">4. Confidentiality & Non-Disclosure</h2>
            <p>
              Both parties agree to hold all technical specifications, trade secrets, financial details, and proprietary algorithms in strict confidence. NDA protections survive termination of services for a minimum period of 5 years.
            </p>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">5. Limitation of Liability</h2>
            <p>
              In no event shall V Soft Solution LLC or its partners be liable for indirect, incidental, or consequential damages exceeding the total fees paid under the specific Statement of Work during the 6 months prior to the claim.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark">6. Governing Law & Jurisdiction</h2>
            <p className="text-sm">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles. Any legal disputes shall be resolved in the state or federal courts located in Santa Clara County, California.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Need a Custom Master Services Agreement (MSA)?</h3>
          <button
            onClick={() => openModal()}
            className="px-8 py-3 rounded-xl btn-gradient text-white font-bold text-sm"
          >
            Contact Legal Team
          </button>
        </div>
      </section>
    </div>
  );
}
