export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "V Soft Solution LLC",
    "url": "https://vsoftsolution.com",
    "logo": "https://vsoftsolution.com/logo.png",
    "description": "V Soft Solution LLC empowers businesses with cutting-edge AI solutions, strategic digital marketing, expert HR consulting, and enterprise IT services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Enterprise Parkway, Suite 500",
      "addressLocality": "San Jose",
      "addressRegion": "CA",
      "postalCode": "95134",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-8763",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/v-soft-solution-llc",
      "https://twitter.com/vsoftsolution",
      "https://facebook.com/vsoftsolution"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions & Automation",
            "description": "Custom LLMs, Machine Learning, Predictive Analytics, Chatbots, and Intelligent Workflow Automation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Data-Driven SEO, PPC Ads, LinkedIn Marketing, CRO, Content Strategy, and Marketing Automation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HR Consulting & Recruitment",
            "description": "Executive Search, Strategic Talent Acquisition, HR Outsourcing, Payroll, and Compliance Management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting & Software Services",
            "description": "Enterprise Cloud Migration, Custom Software Engineering, DevOps, and Cybersecurity Solutions."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
