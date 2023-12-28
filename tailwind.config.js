/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: ["light", "acid", "winter", "dark", "dracula"]
  },
  plugins: [require("daisyui")],
}