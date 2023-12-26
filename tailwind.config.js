/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    screens: {
      'xs': {'min': '200px', 'max': '500px'},
      'tab': {'min': '550px', 'max': '1030px'},
    }
  },
  plugins: [require('flowbite/plugin')],
}