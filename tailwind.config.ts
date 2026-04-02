import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#FF2D78",
          purple: "#BF5AF2",
          cyan: "#00F5FF",
          blue: "#3B82F6",
          lilac: "#C084FC",
        },
        space: {
          dark: "#060612",
          deep: "#0D0B2B",
          mid: "#13113A",
          card: "#1A1740",
          border: "#2E2A6E",
        },
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Nunito'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 45, 120, 0.4), 0 0 60px rgba(191, 90, 242, 0.2)",
        cyan: "0 0 20px rgba(0, 245, 255, 0.4), 0 0 60px rgba(0, 245, 255, 0.15)",
        card: "0 4px 24px rgba(191, 90, 242, 0.15), 0 1px 4px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "gradient-neon":
          "linear-gradient(135deg, #FF2D78 0%, #BF5AF2 50%, #00F5FF 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(26,23,64,0.9) 0%, rgba(13,11,43,0.95) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(255, 45, 120, 0.4)" },
          "100%": {
            boxShadow:
              "0 0 30px rgba(255, 45, 120, 0.8), 0 0 60px rgba(191, 90, 242, 0.4)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
