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
      light: {
        'primary-100': '#002e6f',
        'primary-200': '#004292',
        'primary-300': '#0158b4',
        'primary-400': '#278be8',
        'primary-500': '#0170d7',
        'primary-600': '#55aae7',
        'primary-700': '#bce8ff',
        'primary-800': '#bce8ff',
        'primary-900': '#e8f8ff',
        'secondary-100': '#e6f8c1',
        'secondary-200': '#d2f29b',
        'secondary-300': '#bdeb77',
        'secondary-400': '#a6e555',
        'secondary-500': '#90de35',
        'secondary-600': '#6dba21',
        'secondary-700': '#4f9512',
        'secondary-800': '#357107',
        'secondary-900': '#1f4d00'
      },
      dark: {
        'primary-900': '#081e3d',
        'primary-800': '#0f2c50',
        'primary-700': '#103257',
        'primary-600': '#11416d',
        'primary-500': '#174a7a',
        'primary-400': '#38719b',
        'primary-300': '#93b7cc',
        'primary-200': '#acc3ce',
        'primary-100': '#cfcfcf'
      }
    })
  ]
}
