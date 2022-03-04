module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'sneakers': "url('../public/assets/img_sneakers_header.svg')",
        'ilogo_lighting': "url('../public/assets/ilogo_lighting.png')",
        'img_sneakers_overlay': "url('../public/assets/img_sneakers_overlay.png')",
        'img1': "url('../public/assets/img1.png')",
        'img2': "url('../public/assets/img2.png')",
        'img3': "url('../public/assets/img3.png')",
        
        
      },


      colors: {
        'yellow': '#FFC601',
        'yellow-2': '#FFC600',
        'blue': '#4848FF',
        'purple': '#BC27ED',
        't-black': '#191919',
        't-black-2': '#0E0E0E',
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        'Zenith': 'Zenith-Regular',
        'Zenith-Rough': 'Zenith-Rough',
      },

      fontSize: {
        '40.3': '2.518rem',
        42: ['2.625rem', '2.5rem'],
        '190': '190px',
        '300p': '18.75rem',
        90: ['5.625rem', '5rem'],
        98: ['6.125rem', '5rem'],
        300: ['18.75rem', '8rem'],
      },

      spacing: {
        '13': '52px',
        '60': '60px',
        '66': '66px',
        '135': '135px',
        '224': '224px',
        '279': '279px',
        '304.7': '19.044rem',
        '385': '385px',
        '398': '398px',
        '407': '407px',
        '446': '446px',
        '475': '29.688rem',
        '498': '498px',
        '538': '538px',
        '560': '560px',
        '652': '652px',
        '660': '660px',
        '739': '739px',
        '759': '759px',
        '790': '790px',
        '852': '852px',
        '950': '950px',
        '1070': '1070px',
        '1077': '1077px',
        '1079': '1079px',
        '1168': '1168px',
        '1197': '1197px',
        '1267': '1267px',
        '1334': '1334px',
        '1500': '1500px',
        '1980': '1980px',
        
      },

      rotate: {
        '15': '-15deg',
        'm90': '-90deg',
      },

      maxWidth: {
        '150': '150px',
        '239': '239px',
        '420': '420px',
        '398': '398px',
        '660': '660px',
        '754': '754px',
        '1085': '1085px',
        '1334': '1334px',
        
        
      },

      letterSpacing: {
        's-30': '1.875rem',
        
      },

      zIndex: {
        '1': '1',
        '2': '2',
      }

    },
  },
  plugins: [],
}
