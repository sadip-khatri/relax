/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6FBF73",
        secondary: "#8EDC8A",
        accent: "#D8B86A",
        background: "#FAF9F6",
        alt: "#F1F8F4",
        textdark: "#2F4F3A",
      },
    },
  },
  plugins: [],
};
