/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        auraBg: "#f1f8ff",
        auraBlue: "#0074c7",
        auraBlueDark: "#00497c",
        auraGrey: "#384050",
        auraRed: "#cd2c2e",
        auraGreen: "#82b864"
      }
    }
  },
  plugins: []
}
