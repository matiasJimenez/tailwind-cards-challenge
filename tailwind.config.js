module.exports = {
  content:  ["./*.{html,js}"],
  theme: {    
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
