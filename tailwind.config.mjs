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
          100: '#0A0E15',
          90:  '#212631',
          80:  '#373F4E',
          70:  '#4E576A',
          60:  '#667085',
        },
        white: {
          100: '#FFFFFF',
          90:  '#F0F1F5',
          80:  '#E0E4EB',
          70:  '#D1D6E0',
          60:  '#BFC6D4',
        },
      },
    },
  },
  plugins: [],
}
