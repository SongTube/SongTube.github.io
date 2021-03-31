module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: '#ff5252',
        background: '#212121',
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
