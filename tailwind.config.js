/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkMain: '#000', // Define el color para el modo oscuro
        darkSecond: '#f8014e',
        darkText: '#fff',
        darkThird: '#212529',
        lightMain: '#dedede',
        lightSecond: '#63a2fa',
        lightText: '#000',
        lightThird: '#4a57a9',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['dark'], // Habilita la variante "dark" para la propiedad "brightness"
    },
  },
  plugins: [],
};

