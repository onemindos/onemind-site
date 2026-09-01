import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#8B0000",
          bright: "#b91c1c",
          glow: "rgba(139,0,0,0.4)",
          subtle: "rgba(139,0,0,0.1)",
        },
        black: {
          DEFAULT: "#050607",
          2: "#0a0c0e",
          3: "#111418",
          4: "#1a1e24",
        },
        dim: "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(139,0,0,0)" },
          "50%": { boxShadow: "0 0 24px 4px rgba(139,0,0,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(139,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,0,0,0.06) 1px, transparent 1px)",
        "radial-red": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%)",
        "radial-red-left": "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(139,0,0,0.12) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
