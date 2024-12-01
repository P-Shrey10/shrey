/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Adjust paths based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
