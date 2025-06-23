import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107", // Amarelo libertário
        secondary: "#1A3C34", // Verde sustentável
        accent: "#000000", // Preto
      },
    },
  },
  plugins: [],
};
export default config;
