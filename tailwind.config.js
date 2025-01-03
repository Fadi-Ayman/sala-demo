const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00414d",
        secondary: "#baf3e6",
        logo: "#76e8cd",
        footer: "#004956",
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}