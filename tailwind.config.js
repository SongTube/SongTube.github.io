module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#F6453A',
        background: '#212121',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
