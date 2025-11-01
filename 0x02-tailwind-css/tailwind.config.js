/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Scans HTML files in the root folder
    './src/**/*.js', // Correct glob pattern for JS files in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
