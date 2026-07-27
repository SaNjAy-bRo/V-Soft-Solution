import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#090D16", // Deeper, ultra-luxury midnight slate
          navy: "#0F172A",
          primary: "#2563EB", // Vibrant cobalt
          accent: "#38BDF8", // Electric sky blue
          light: "#F8FAFC",
          text: "#0F172A",
          muted: "#64748B",
          border: "#E2E8F0",
          success: "#10B981",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #00B4D8 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0.75) 50%, rgba(9, 13, 22, 0.9) 100%)',
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
        'glow-primary': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
