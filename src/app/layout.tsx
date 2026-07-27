import type { Metadata } from "next";
import { Manrope, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ConsultationModalProvider } from "@/components/ui/ConsultationModalProvider";
import JsonLd from "@/components/seo/JsonLd";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vsoftsolution.com"),
  title: {
    default: "V Soft Solution LLC | Enterprise AI, Digital Marketing, HR & IT Services",
    template: "%s | V Soft Solution LLC",
  },
  description: "V Soft Solution LLC empowers global enterprises, startups, and mid-market companies with cutting-edge AI Solutions & Automation, Performance Digital Marketing, Executive HR Consulting, and Scalable IT Services.",
  keywords: [
    "V Soft Solution LLC",
    "AI Solutions",
    "AI Automation",
    "Digital Marketing Agency",
    "HR Consulting Services",
    "IT Consulting",
    "Enterprise Software Development",
    "Technology Partners",
    "Executive Search",
    "Machine Learning Consulting",
  ],
  authors: [{ name: "V Soft Solution LLC" }],
  creator: "V Soft Solution LLC",
  publisher: "V Soft Solution LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vsoftsolution.com",
    siteName: "V Soft Solution LLC",
    title: "V Soft Solution LLC | Enterprise AI, Digital Marketing, HR & IT Services",
    description: "Empowering modern businesses through AI innovation, high-ROI digital marketing strategies, workforce talent solutions, and enterprise software engineering.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V Soft Solution LLC Enterprise Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V Soft Solution LLC | Enterprise AI, Digital Marketing, HR & IT Services",
    description: "Transforming businesses through AI, digital innovation & workforce excellence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-white text-brand-text min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
        <ConsultationModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
