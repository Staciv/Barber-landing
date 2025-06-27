import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        smooch: ['"Smooch Sans"', "sans-serif"],
      },
      colors: {
        inputBg: "#f3f3f38f",
        textBarberCard: "rgb(245 253 98)",
        backgroundCard: "rgb(69 69 69 / 30%)",
        backgroundButton: "rgb(27 21 21)",
      },
      spacing: {
        paddingInput: "5rem",
      },
    },
    screens: {
      mobile: { max: "767px" },
      tablet: { min: "767px", max: "1023" },
      desktop: { min: "1024px" },
    },
  },
  plugins: [daisyui],
};
