import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "rgb(26, 58, 92)",
        lightCream: "rgb(240, 245, 250)",
        yellow: "rgb(205, 159, 82)",
        brandBlue: "#2a7ab5",
        teal: "#2a7ab5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
