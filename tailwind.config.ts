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
      backgroundColor: {
        primaryGreen: "#D0D5CE",
        secondaryGreen: "#67BC45",
        hexColor: "#3F4446",
      },
      colors: {
        primaryGreen: "#D0D5CE",
        secondaryGreen: "#67BC45",
        hexColor: "#3F4446",
      },
      borderColor: {
        primaryGreen: "#D0D5CE",
        secondaryGreen: "#67BC45",
        hexColor: "#3F4446",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
