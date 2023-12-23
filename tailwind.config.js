/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: require("./src/themes/colors"),
      fontSize: require("./src/themes/fontSize"),
      spacing: require("./src/themes/spacing"),
      borderRadius: require("./src/themes/spacing"),
      lineHeight: require("./src/themes/spacing"),
      borderWidth: require("./src/themes/spacing"),
    },
  },
  plugins: [],
}
