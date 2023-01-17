/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // homepage grid column configuration
        home: "1fr 1fr 5% 1fr 1fr",
      },
    },
  },
  plugins: [],
};
