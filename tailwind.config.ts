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
        background: "#090E1A",
        surface: "#0F1629",
        "surface-elevated": "#141D35",
        border: "#1E2D50",
        "accent-blue": "#3B82F6",
        "accent-teal": "#14B8A6",
        "accent-glow": "#60A5FA",
        "text-primary": "#F0F4FF",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
