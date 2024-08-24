const { baseContent, baseScreens, baseConfig } = require('../../tailwind.base.config.js')
/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'].concat(baseContent),
  theme: {
    screens: baseScreens
  },
  plugins: []
}
