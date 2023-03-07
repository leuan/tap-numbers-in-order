/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lobster'],
        body: ['Lexend Deca']
      },
      boxShadow: {
        'nm-l': '-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)',
        'nm-s': '-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1);',
        'nm-pressed': 'inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15);',
        'nm-l-dark': '-6px -6px 20px rgba(80, 80, 80, .4), -6px -6px 10px rgba(80, 80, 80, .5), 6px 6px 8px rgba(80, 80, 80, .075), 6px 6px 10px rgba(0, 0, 0, .7)',
        'nm-s-dark': 'box-shadow: -2px -2px 6px rgba(80, 80, 80, .35), -2px -2px 4px rgba(80, 80, 80, .2), 2px 2px 2px rgba(80, 80, 80, .05), 2px 2px 4px rgba(0, 0, 0, .4)',
        'nm-pressed-dark': 'box-shadow: inset -2px -2px 6px rgba(80, 80, 80, .35), inset -2px -2px 4px rgba(80, 80, 80, .25), inset 2px 2px 2px rgba(80, 80, 80, .075), inset 2px 2px 4px rgba(0, 0, 0, .3);'
      }
    },
  },
  plugins: [],
}
