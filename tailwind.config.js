/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 15px 40px -20px rgba(40, 44, 63, .15)", // custom shadow used in Header Component
      },
    },
  },
  plugins: [],
};
