/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  keyframes: {
    scroll: {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(-50%)" },
    },
    scrollReverse: {
      from: { transform: "translateX(-50%)" },
      to: { transform: "translateX(0)" },
    },
  },
  animation: {
    scroll: "scroll 80s linear infinite",
    scrollReverse: "scrollReverse 80s linear infinite",
  },

    },

  },
  plugins: [],
};
