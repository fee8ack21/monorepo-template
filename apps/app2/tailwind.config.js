const { baseContent, baseScreens, baseConfig } = require('../../tailwind.base.config.js')
const { createThemes } = require('tw-colors')
/** @type {import('tailwindcss').Config} */
export default {
  presets: [baseConfig],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'].concat(baseContent),
  theme: {
    screens: baseScreens
  },
  plugins: [
    createThemes({
      theme: {
        'primary-100': '#FFF5E6',
        'primary-200': '#FFDFB0',
        'primary-300': '#FFD495',
        'primary-400': '#FFC875',
        'primary-500': '#FFB74C',
        'primary-600': '#FFAD34',
        'primary-700': '#FF9801',
        'primary-800': '#F37D27',
        'primary-900': '#692601',
        'secondary-100': '#E6F2EF',
        'secondary-200': '#B0D8CE',
        'secondary-300': '#8AC5B6',
        'secondary-400': '#54AA95',
        'secondary-500': '#339981',
        'secondary-600': '#008061',
        'secondary-700': '#007458',
        'secondary-800': '#005B45',
        'secondary-900': '#004635'
      }
    })
  ]
}
