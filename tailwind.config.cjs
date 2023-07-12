/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      aria: {
        collapsed: 'expanded="false"'
      },
      colors: {
        main: "#6474d1",
      },
      screens: {
        print: { raw: 'print' },
      }
    },
  },
  plugins: [],
  important: true,
}
