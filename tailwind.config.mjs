/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        black: {
          100: '#171717',
          90:  '#222222',
          80:  '#343434',
          70:  '#484848',
        },
        cream: '#f5f4f0',
      },
    },
  },
  plugins: [],
}
