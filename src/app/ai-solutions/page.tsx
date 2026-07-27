"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Bot,
  Sparkles,
  Database,
  Brain,
  LineChart,
  FileText,
  Workflow,
  BarChart3,
  ArrowRight,
  ChevronDown,
  Layers,
  Zap,
} from "lucide-react";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function AISolutionsPage() {
  const { openModal } = useConsultationModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const aiServices = [
    {
      title: "AI Automation Workflows",
      icon: Workflow,
      desc: "Automate high-volume data processing and multi-step operational logic with zero-friction autonomous pipelines.",
    },
    {
      title: "Custom LLMs & RAG Engines",
      icon: Cpu,
      desc: "Proprietary machine learning models trained on your private company data with enterprise security guarantees.",
    },
    {
      title: "Autonomous AI Agents",
      icon: Bot,
      desc: "Intelligent conversational agents connected to your knowledge bases and CRMs for automated 24/7 resolution.",
    },
    {
      title: "Generative AI Integration",
      icon: Sparkles,
      desc: "Leverage state-of-the-art LLMs (GPT-4o, Claude 3.5, Llama 3) to automate content, coding, and dynamic synthesis.",
    },
    {
      title: "Machine Learning Solutions",
      icon: Brain,
      desc: "Custom predictive models, anomaly detection, recommendation engines, and computer vision algorithms.",
    },
    {
      title: "Predictive Analytics",
      icon: LineChart,
      desc: "Forecast market trends, customer churn, demand fluctuation, and financial risk using advanced statistical modeling.",
    },
    {
      title: "Natural Language Processing",
      icon: Layers,
      desc: "Extract structured intelligence from unstructured emails, legal contracts, feedback, and medical transcripts.",
    },
    {
      title: "Document & OCR Automation",
      icon: FileText,
      desc: "Intelligent document parsing engines that digitize paper invoices, PDFs, and compliance forms instantly.",
    },
    {
      title: "AI Business Intelligence",
      icon: BarChart3,
      desc: "Executive dashboards with natural language querying—ask your data questions and receive instant visual charts.",
    },
  ];

  const techStack = [
    { name: "OpenAI", category: "Generative AI", desc: "GPT-4o & RAG Assistants" },
    { name: "Azure AI", category: "Cloud Security", desc: "Enterprise Security & ML" },
    { name: "AWS AI", category: "Cloud Compute", desc: "Bedrock, SageMaker & Lambda" },
    { name: "Python", category: "Data Science", desc: "PyTorch, Scikit-Learn" },
    { name: "TensorFlow", category: "Deep Learning", desc: "Custom Neural Models" },
    { name: "LangChain", category: "Orchestration", desc: "Multi-Agent Frameworks" },
    { name: "Pinecone", category: "Vector DB", desc: "Ultra-Fast Semantic Search" },
    { name: "Node.js", category: "API Layer", desc: "Microservice Connectors" },
  ];

  const caseStudies = [
    {
      client: "Global Logistics Leader",
      impact: "70% Faster Document Verification",
      desc: "Deployed an automated Document AI pipeline processing 120,000 international bills monthly with zero manual errors.",
    },
    {
      client: "Fintech Enterprise",
      impact: "84% Reduction in Fraud Losses",
      desc: "Engineered a real-time machine learning anomaly detection system screening 4.5M daily transactions.",
    },
    {
      client: "Healthcare Network",
      impact: "$3.8M Operational Savings",
      desc: "Implemented HIPAA-compliant medical record extraction AI cutting physician paperwork by 2.5 hours per shift.",
    },
  ];

  const faqs = [
    {
      q: "How does V Soft Solution LLC ensure company data privacy with Custom AI models?",
      a: "All AI models and vector databases are deployed within dedicated, isolated VPC cloud instances (Azure/AWS) protected by SOC 2 and ISO 27001 encryption. Your company data is never used to train public models.",
    },
    {
      q: "How long does a typical Enterprise AI deployment take?",
      a: "Proof of Concept (PoC) prototypes are typically deployed within 2 to 4 weeks. Full enterprise integration ranges from 6 to 12 weeks.",
    },
    {
      q: "Can V Soft AI integrate with our existing CRM and ERP software?",
      a: "Yes. Our AI architectures utilize RESTful APIs, Webhooks, and custom middleware connectors for seamless integration into Salesforce, HubSpot, SAP, and NetSuite.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO */}
      <section className="hero-ai-bg text-white pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" /> Enterprise Artificial Intelligence
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Enterprise AI Solutions Built for Measurable Impact
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
              Supercharge your organization with custom machine learning models, autonomous LLM agents, intelligent OCR automation, and predictive business intelligence.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => openModal("AI Solutions")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-glow flex items-center justify-center gap-2"
              >
                Schedule AI Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              9 Specialized AI & Automation Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, idx) => {
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

      {/* INNOVATIVE SECTION 1: AI ARCHITECTURE & CORE ENGINES */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Card with Glow & Floating Stats */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
                <img
                  src="/images/ai-architecture-engine.png"
                  alt="Enterprise AI Engine Architecture"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-dark/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-gray-200">RAG Engine Active</span>
                  </div>
                  <span className="text-xs font-extrabold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/20">
                    99.9% Vector Precision
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Capabilities */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" /> Next-Gen Enterprise Infrastructure
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Proprietary AI Engine Architecture Built for Scale
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We design resilient, enterprise-grade AI backbones that securely orchestrate private data, domain LLMs, and real-time execution pipelines with sub-second latency.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Autonomous Multi-Agent Swarms",
                    desc: "Specialized AI agents executing complex multi-step workflows with human-in-the-loop oversight.",
                  },
                  {
                    title: "Enterprise RAG & Hybrid Vector Search",
                    desc: "Connect your enterprise knowledge base to customized LLMs with zero data leakage.",
                  },
                  {
                    title: "Sub-100ms Inference Optimization",
                    desc: "Quantized model deployments running on dedicated GPU clusters for maximum throughput.",
                  },
                  {
                    title: "SOC 2 & HIPAA Compliant Enclaves",
                    desc: "Isolated VPC environments with end-to-end data encryption in transit and at rest.",
                  },
                ].map((cap, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/40 transition-colors flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cap.title}</h3>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
              Technology Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Powered by Leading AI Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-light border border-gray-200 space-y-2 hover:border-brand-accent transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-2 py-0.5 rounded">
                  {tech.category}
                </span>
                <h3 className="text-xl font-bold text-brand-dark">{tech.name}</h3>
                <p className="text-xs text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVATIVE SECTION 2: AI COMMAND & SPEED-TO-IMPACT ROADMAP */}
      <section className="py-24 bg-brand-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Roadmap Steps */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                <Workflow className="w-4 h-4" /> Deployment Roadmap
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
                From Proof of Concept to Production in 8 Weeks
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our battle-tested AI deployment framework eliminates risk and ensures rapid ROI with structured milestones and transparent validation gates.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { phase: "Phase 1: Wk 1-2", title: "Data Audit & Architecture Design", desc: "Security clearance, data pipeline mapping, and LLM model selection." },
                  { phase: "Phase 2: Wk 3-4", title: "Custom Prototype & RAG Indexing", desc: "Build sandbox prototype, vector database ingestion, and fine-tuning." },
                  { phase: "Phase 3: Wk 5-6", title: "Agent Integration & Stress Testing", desc: "API middleware connections, load testing, and edge case safety evaluation." },
                  { phase: "Phase 4: Wk 7-8", title: "Production Launch & Continuous Monitoring", desc: "Full VPC deployment, telemetry dashboard setup, and operational handoff." },
                ].map((step, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-brand-primary transition-all flex items-start gap-4">
                    <span className="px-3 py-1 rounded-lg bg-brand-primary text-white text-xs font-extrabold shrink-0 mt-0.5">
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

            {/* Right Column: AI Command Center Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-700" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-brand-dark">
                <img
                  src="/images/ai-command-center.png"
                  alt="Enterprise AI Command Center HUD"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-6 bg-brand-dark text-white space-y-2 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">Live Telemetry Control HUD</div>
                  <div className="text-sm font-semibold text-gray-300">Real-time model accuracy, latency tracking, and autonomous agent logs.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Proven AI Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                <span className="text-xs font-semibold text-brand-accent uppercase">{cs.client}</span>
                <div className="text-2xl font-black text-brand-accent">{cs.impact}</div>
                <p className="text-gray-300 text-sm">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
              Frequently Asked Questions
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
            Ready to Deploy Enterprise AI in Your Organization?
          </h2>
          <button
            onClick={() => openModal("AI Solutions")}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Book Free AI Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
