"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Megaphone,
  Users,
  Laptop,
  ArrowRight,
} from "lucide-react";
import { useConsultationModal } from "../ui/ConsultationModalProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceCards = [
    {
      title: "AI Solutions & Automation",
      href: "/ai-solutions",
      icon: Cpu,
      color: "text-brand-accent bg-brand-accent/10",
      desc: "Custom LLMs, autonomous agents, and predictive machine learning models.",
    },
    {
      title: "Digital Marketing & Growth",
      href: "/digital-marketing",
      icon: Megaphone,
      color: "text-blue-400 bg-blue-500/10",
      desc: "Technical SEO, Google/Meta Ads PPC, and B2B LinkedIn revenue strategy.",
    },
    {
      title: "HR Consulting & Talent",
      href: "/hr-consulting",
      icon: Users,
      color: "text-emerald-400 bg-emerald-500/10",
      desc: "Executive search, technical recruiting, global payroll, and compliance.",
    },
    {
      title: "IT & Cloud Engineering",
      href: "/ai-solutions#it-services",
      icon: Laptop,
      color: "text-purple-400 bg-purple-500/10",
      desc: "AWS/Azure cloud migration, enterprise software, and SOC2 cybersecurity.",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-xl shadow-2xl border-b border-white/10 py-3.5"
          : "bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent p-0.5 shadow-glow transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
                <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                  V
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-brand-accent transition-colors">
                V Soft <span className="text-brand-accent">Solution</span>
              </span>
            </div>
          </Link>

          {/* Clean Nav Center */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 flex-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                pathname === "/" ? "text-white bg-white/10 font-bold" : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* Categorized Services Mega Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                className={`px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors rounded-xl hover:bg-white/5 ${
                  servicesDropdownOpen ? "text-white bg-white/10" : ""
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 text-brand-accent transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-24 w-[680px] pt-1 z-50">
                  <div className="bg-brand-dark/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl p-5 grid grid-cols-2 gap-4">
                    {serviceCards.map((service, i) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={i}
                          href={service.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-4 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 hover:border-white/15 flex items-start gap-3.5 group/item"
                        >
                          <div className={`p-2.5 rounded-xl shrink-0 ${service.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-bold text-white group-hover/item:text-brand-accent transition-colors flex items-center gap-1">
                              {service.title}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <div className="text-xs text-gray-300 leading-relaxed">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                pathname === "/about" ? "text-white bg-white/10 font-bold" : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                pathname === "/contact" ? "text-white bg-white/10 font-bold" : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-brand-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-brand-accent"
          >
            Home
          </Link>
          <div className="pl-3 border-l-2 border-brand-accent/30 space-y-2 py-1">
            <span className="text-xs uppercase font-bold text-gray-400">Services</span>
            {serviceCards.map((s, idx) => (
              <Link
                key={idx}
                href={s.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
              >
                {s.title}
              </Link>
            ))}
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-brand-accent"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-brand-accent"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
