module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'text-draw': 'text-draw 4s linear forwards',
      },
      keyframes: {
        'text-draw': {
          to: {
            strokeDashoffset: '0',
          }
        }
      }
    },
  },
  plugins: [],
}