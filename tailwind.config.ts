import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#333333",
        black: "#1A1A1A",
        hover: "#202020",
        label: "#8A8A8A",
        white: "#F6F6F6",
        greenGradient: "#00F0C4",
        blueGradient: "#2C2CBD",
        blue: "#1C73E8",
        blueBorder: "#4293FF",
        green: "#46D764",
        red: "#FF375B",
        grayDisabled: "#CCC",
      },
    },
  },
  plugins: [],
};
export default config;
