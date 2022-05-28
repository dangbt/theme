// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/**.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transition: 'transition',
      gradient: 'linear-gradient(90deg,#896eff 0,#5f3bff 51%,#896eff)',
      gradientSec: 'linear-gradient(90deg,#130065 0,#2b0ead 51%,#130065)',
      blue: '#5543d1',
      indigo: '#6610f2',
      purple: '#6f42c1',
      pink: '#e83e8c',
      red: '#ff586e',
      orange: '#ff8853',
      yellow: '#ffa808',
      green: '#029e76',
      teal: '#20c997',
      cyan: '#17a2b8',
      white: '#fff',
      gray: '#6c757d',
      'gray-dark': '#343a40',
      primary: '#896eff',
      'bg-primary': '#896eff1a',
      secondary: '#1f2471',
      success: '#029e76',
      info: '#00aeff',
      warning: '#fea500',
      danger: '#ff5269',
      light: '#faf8f2',
      dark: '#262f5a',
      white: '#ffffff',
      black: '#000000',
    },
    boxShadow: {
      1: '0 0 10px 4px rgb(31 66 135 / 10%)',
      2: '0 1px 40px 0 rgb(0 0 0 / 10%)',
    },
    animation: {
      'left-to-right': 'toLeftFromRight .5s forwards',
      'up-to-down': 'upToDown .3s forwards',
      move1: 'move1 5s infinite',
      move2: 'move2 5s infinite',
      move3: 'move3 5s infinite',
    },
    container: {
      center: true,
    },

    extend: {
      keyframes: {
        toLeftFromRight: {
          '49%': {
            transform: 'translateX(100%)',
          },
          '50%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '51%': {
            opacity: 1,
          },
        },
        upToDown: {
          '49%': {
            transform: 'translateY(100%)',
          },
          '50%': {
            opacity: 0,
            transform: 'translateY(-100%)',
          },
          '51%': {
            opacity: 1,
          },
        },
        move1: {
          '0%': {
            transform: 'rotate(-1deg) translate(-2px, -2px)',
          },
          50: {
            transform: 'rotate(1deg) translate(2px, 2px)',
          },
          to: {
            transform: 'rotate(-1deg) translate(-2px, -2px)',
          },
        },
        move2: {
          '0%': {
            transform: 'rotate(1deg) translate(2px, 2px)',
          },

          '50%': {
            transform: 'rotate(-1deg) translate(-2px, -2px)',
          },
          to: {
            transform: 'rotate(1deg) translate(2px, 2px)',
          },
        },
        move3: {
          '0%': {
            transform: 'translate(0)',
          },

          '20%': {
            transform: 'translate(5px)',
          },

          '40%': {
            transform: 'translate(5px, 5px)',
          },

          '65%': {
            transform: 'translateY(5px)',
          },

          '65%': {
            transform: 'translate(5px)',
          },

          to: {
            transform: 'translate(0)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
      addComponents({
        'text-heading-1': {
          fontWeight: 700,
          fontSize: '54px',
          lineHeight: 1.2,
        },
        'text-heading-2': {
          fontWeight: 700,
          fontSize: '38px',
          lineHeight: 1.2,
        },
        'text-heading-3': {
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: 1.2,
        },
        'text-heading-4': {
          fontWeight: 700,
          fontSize: '25px',
          lineHeight: 1.2,
        },
        'text-heading-5': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: 1.2,
        },

        'text-heading-6': {
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: 1.2,
        },

        'text-body-1': {
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: 1.2,
        },
      });
    }),
  ],
};
