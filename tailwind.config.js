import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#222F4D",
        },
        secondary: {
          base: "#F2F2F2",
        },
        danger: {
          base: "#CE5347",
        },
      },
      fontFamily: {
        "telkom-batik": ["TelkomBatik", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
      },
    },
  },
  plugins: [daisyui],
};
