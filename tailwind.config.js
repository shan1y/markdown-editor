/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'pale-orange': '#F39765',
        'orange': '#E46643',
        'grey-0': '#f5f5f5',
        'grey-1': '#E4E4E4',
        'grey-2': '#C1C4Cb',
        'grey-3': '#ecebff',
        'slider-grey': '#5A6069',
        'header-bkg': '#2B2D31',
        'icon-grey': '#7C8187',
        'hamburger-bkg': '#35393F',
        'side-bkg': '#1D1F22',
        'dark-bkg': '#151619',
        'dark-blockquote': "#2B2D31"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        "Roboto-Slab": ['Robot Slab', 'monospace'],
        "Roboto-Mono": ['Roboto Mono', 'serif']
      },
      spacing: {
        72: "72px",
        40: "40px",
        42: "42px",
        20: "20px",
        24: "24px",
        27: "27px",
        28: "28px",
      },
      width: {
        "250px": "250px"
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

