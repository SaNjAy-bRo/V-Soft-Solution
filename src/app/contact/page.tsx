"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useConsultationModal } from "@/components/ui/ConsultationModalProvider";

export default function ContactPage() {
  const { openModal } = useConsultationModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "AI Solutions & Automation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setErrorMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "Where is V Soft Solution LLC headquartered?",
      a: "Our primary corporate office is located at 100 Enterprise Parkway, Suite 500, San Jose, CA 95134, with satellite consulting teams operating across North America and Europe.",
    },
    {
      q: "How quickly can I expect a response after submitting a inquiry?",
      a: "Our senior account executives respond to all enterprise contact submissions within 2 to 4 business hours.",
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs) prior to discovery discussions?",
      a: "Yes. We strictly adhere to NDA protocols to protect your proprietary algorithms, trade secrets, and internal roadmap prior to any deep technical review.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* HERO HEADER */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" /> Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Extraordinary Together
          </h1>
          <p className="text-gray-300 text-lg">
            Have a project in mind or need executive guidance? Contact our partners today.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTACT SECTION */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT SIDE: CONTACT INFO */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden border border-white/10">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                  <p className="text-gray-300 text-sm">
                    Reach out directly via phone, email, or visit our San Jose corporate headquarters.
                  </p>
                </div>

                <div className="space-y-6 text-sm text-gray-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-accent flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Corporate Office</h4>
                      <p className="mt-1">100 Enterprise Parkway, Suite 500</p>
                      <p>San Jose, CA 95134, United States</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Toll-Free Phone</h4>
                      <a href="tel:+18005558763" className="text-brand-accent hover:underline mt-1 block">
                        +1 (800) 555-VSOFT (+1 800 555 8763)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-accent flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Executive Email</h4>
                      <a href="mailto:contact@vsoftsolution.com" className="text-brand-accent hover:underline mt-1 block">
                        contact@vsoftsolution.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-brand-primary flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Business Hours</h4>
                      <p className="mt-1">Monday – Friday: 8:00 AM – 6:00 PM PST</p>
                      <p className="text-xs text-gray-400">24/7 Monitoring for Managed IT Clients</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Connect:</span>
                  <div className="flex items-center gap-3">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent text-white flex items-center justify-center transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-accent text-white flex items-center justify-center transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-2xl font-extrabold text-brand-dark">Send Us a Request</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Fill out the form below and an executive partner will reach out promptly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-brand-success rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark">Message Sent Successfully!</h3>
                    <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                      Thank you, <span className="font-semibold text-brand-dark">{formData.name}</span>. Your request regarding <span className="font-semibold text-brand-primary">{formData.service}</span> has been received. Our partner will reply to <span className="font-semibold text-brand-primary">{formData.email}</span> within 4 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "AI Solutions & Automation",
                          message: "",
                        });
                      }}
                      className="px-8 py-3 rounded-xl btn-gradient text-white font-semibold text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Enterprise Inc"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all bg-white"
                      >
                        <option value="AI Solutions & Automation">AI Solutions & Automation</option>
                        <option value="Digital Marketing">Digital Marketing & Growth Strategy</option>
                        <option value="HR Consulting">HR Consulting & Executive Recruitment</option>
                        <option value="IT Services">IT Services & Software Engineering</option>
                        <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Message / Project Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your objectives, current challenges, timelines, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none text-sm transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-brand-primary" /> NDA & Privacy Assured
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3.5 rounded-xl btn-gradient text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Submit Inquiry <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* FULL-WIDTH GOOGLE MAP SECTION */}
          <div className="mt-12 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl h-[420px] relative">
            <iframe
              title="San Jose HQ Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.237882236!2d-121.96924705!3d37.3708573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb900c6da5b1%3A0x5a2f5802e64b8577!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CONTACT FAQ */}
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

      {/* CTA BANNER */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Need Immediate Executive Assistance?
          </h2>
          <button
            onClick={() => openModal()}
            className="px-8 py-4 rounded-xl btn-gradient text-white font-bold text-base shadow-2xl"
          >
            Book Free Consultation Call
          </button>
        </div>
      </section>
    </div>
  );
}
