import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151819",
        paper: "#f7f8f3",
        panel: "#ffffff",
        line: "#dfe5dc",
        moss: "#2e6f5b",
        ember: "#b55f23",
        violet: "#5d4a9c",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(21, 24, 25, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
