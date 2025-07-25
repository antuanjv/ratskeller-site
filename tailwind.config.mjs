export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: { dark: '#0A1C29', gold: '#C9A44C', cream: '#F4F1EC' }
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        display: ['"Miller Display"', 'serif']
      }
    }
  },
  plugins: []
};
