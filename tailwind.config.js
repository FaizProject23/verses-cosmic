/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        White: "#F9F2ED",
        Blue: "#3AB0FF",
        Yellow: "#FFB562",
        Red: "#F87474",
        Black: "#333",
      },
    },
  },
  plugins: [],
};
