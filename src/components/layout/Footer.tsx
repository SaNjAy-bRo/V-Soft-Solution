"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ShieldCheck,
} from "lucide-react";
import { useConsultationModal } from "../ui/ConsultationModalProvider";

export default function Footer() {
  const { openModal } = useConsultationModal();

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent p-0.5 shadow-glow">
                <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                    V
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                V Soft <span className="text-brand-accent">Solution</span> LLC
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              V Soft Solution LLC is a premier US technology consulting partner delivering enterprise AI solutions, performance digital marketing, workforce HR consulting, and scalable software engineering.
            </p>
            <div className="pt-2 flex items-center gap-4 text-gray-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-primary hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-primary hover:text-white flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-accent hover:text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-brand-accent" /> ISO 27001 Certified & SOC 2 Compliant Partner
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Primary Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/ai-solutions" className="hover:text-brand-accent transition-colors">
                  AI Solutions & Automation
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-brand-accent transition-colors">
                  Digital Marketing & Growth
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-brand-accent transition-colors">
                  HR Consulting & Recruitment
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions#it-services" className="hover:text-brand-accent transition-colors">
                  IT & Cloud Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/hr-consulting" className="hover:text-white transition-colors">
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              US Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>100 Enterprise Parkway, Suite 500, San Jose, CA 95134</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href="tel:+18005558763" className="hover:text-white transition-colors">
                  +1 (800) 555-VSOFT
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:contact@vsoftsolution.com" className="hover:text-white transition-colors">
                  contact@vsoftsolution.com
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <button
                onClick={() => openModal()}
                className="w-full py-2.5 rounded-xl border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                Schedule Consultation Call
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Working Legal Links Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} V Soft Solution LLC. All rights reserved. Registered US Corporation.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-accent transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors font-medium">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-brand-accent transition-colors font-medium">
              Security & Compliance
            </Link>
            <Link href="/sitemap" className="hover:text-brand-accent transition-colors font-medium">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
