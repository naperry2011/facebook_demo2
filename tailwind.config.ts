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
        background: {
          DEFAULT: "rgb(var(--background-start-rgb))",
          start: "rgb(var(--background-start-rgb))",
          end: "rgb(var(--background-end-rgb))",
        },
        foreground: "rgb(var(--foreground-rgb))",
        muted: "rgb(var(--muted-rgb))",
        accent: {
          DEFAULT: "rgb(var(--accent-rgb))",
          hover: "rgb(var(--accent-hover-rgb))",
        },
        code: {
          bg: "rgb(var(--code-bg-rgb))",
        },
        border: "rgb(var(--border-rgb))",
        link: {
          DEFAULT: "rgb(var(--link-rgb))",
          hover: "rgb(var(--link-hover-rgb))",
        },
        success: {
          DEFAULT: "rgb(var(--success-rgb))",
          bg: "rgb(var(--success-bg-rgb))",
        },
        // Keep existing black/white if needed for specific elements
        black: '#000',
        white: '#fff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 