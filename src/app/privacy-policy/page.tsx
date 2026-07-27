"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function PrivacyPolicyPage() {
  const { openModal } = useConsultationModal();

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Legal & Governance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy & Data Governance
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">
            Effective Date: July 2026 • ISO 27001 & SOC 2 Type II Compliant Governance
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">1. Executive Overview</h2>
            <p>
              V Soft Solution LLC (&quot;V Soft&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy, confidentiality, and security of enterprise data collected from clients, business partners, and website visitors. This Privacy Policy governs our data handling practices across all enterprise consulting, AI automation, digital marketing, HR consulting, and software engineering services.
            </p>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">2. Information Collection Standards</h2>
            <p>
              We collect information strictly necessary to perform enterprise services, process discovery consultation requests, and fulfill contractual obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li><strong>Corporate Identity & Contact Data:</strong> Work email address, full name, phone number, corporate designation, and company name provided during inquiry or consultation scheduling.</li>
              <li><strong>Technical & Telemetry Data:</strong> IP address, browser architecture, system analytics, and security audit logs collected automatically to safeguard infrastructure against cyber threats.</li>
              <li><strong>Client Enterprise Data:</strong> Private data models and operational inputs processed under explicit Non-Disclosure Agreements (NDAs) and isolated VPC environments.</li>
            </ul>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">3. Non-Disclosure & AI Model Isolation</h2>
            <div className="p-6 rounded-2xl bg-brand-light border border-brand-primary/20 space-y-2">
              <div className="flex items-center gap-2 font-bold text-brand-dark text-base">
                <Lock className="w-5 h-5 text-brand-primary" /> Strict Proprietary Model Protection
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Client proprietary data, vector databases, and custom LLM prompts processed by V Soft Solution LLC are **NEVER** used to train public foundation models (e.g., public OpenAI, Anthropic, or Meta models). All AI pipelines reside within SOC 2 Type II certified VPC instances with zero data retention policies.
              </p>
            </div>
          </div>

          <div className="space-y-4 border-b border-gray-100 pb-8">
            <h2 className="text-2xl font-bold text-brand-dark">4. Your Data Rights (CCPA / GDPR Compliance)</h2>
            <p>
              Under global data privacy frameworks including the California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR), you possess the following rights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                <span className="font-bold text-brand-dark">Right to Access:</span> Request full disclosure of all personal data held by V Soft.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                <span className="font-bold text-brand-dark">Right to Deletion:</span> Request complete purging of corporate contact data.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                <span className="font-bold text-brand-dark">Right to Opt-Out:</span> Unsubscribe from strategic briefings at any time.
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                <span className="font-bold text-brand-dark">Non-Discrimination:</span> Zero impact on service quality for exercising privacy rights.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark">5. Contact Our Data Protection Officer (DPO)</h2>
            <p className="text-sm">
              For privacy inquiries, formal audit requests, or CCPA/GDPR data subject requests, please contact our Legal & Security Officers:
            </p>
            <div className="p-6 rounded-2xl bg-brand-dark text-white space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-brand-accent">V Soft Solution LLC — Data Protection Office</div>
              <div>100 Enterprise Parkway, Suite 500, San Jose, CA 95134</div>
              <div>Email: <a href="mailto:privacy@vsoftsolution.com" className="text-brand-accent hover:underline">privacy@vsoftsolution.com</a></div>
              <div>Phone: +1 (800) 555-VSOFT</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold">Have Questions Regarding Enterprise Security?</h3>
          <button
            onClick={() => openModal()}
            className="px-8 py-3 rounded-xl btn-gradient text-white font-bold text-sm"
          >
            Speak With Our Security Officers
          </button>
        </div>
      </section>
    </div>
  );
}
