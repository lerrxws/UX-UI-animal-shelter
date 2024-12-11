/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html", // обов'язково включіть HTML файл
    "./src/**/*.{js,jsx,ts,tsx}", // обов'язково вкажіть шляхи до всіх JS/TS файлів
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'acme': ['Acme-Regular', 'sans-serif'],
      },
      colors: {
        'base_purple': '#675BC8',
        'white': '#ffffff',
        'black': '#000000',
        'dark_purple': '#2E256F',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
