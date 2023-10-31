/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Component/Feature.jsx',
    './src/Component/Contact.jsx',
    './src/Component/Home.jsx'
],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

