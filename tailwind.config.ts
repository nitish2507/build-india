import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b0f1a",
          800: "#111827",
          700: "#1f2937",
          600: "#374151"
        },
        slate: {
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5f5",
          400: "#94a3b8",
          500: "#64748b"
        },
        accent: {
          500: "#b9a27a",
          600: "#a68c5b"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 40px rgba(8, 12, 20, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
