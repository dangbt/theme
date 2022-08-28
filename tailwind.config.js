// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/**.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      transparent: 'transparent',
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
      black: '#000000',
      victoria: '#505489',
    },
    boxShadow: {
      1: '0 0 10px 4px rgb(31 66 135 / 10%)',
      2: '0 1px 40px 0 rgb(0 0 0 / 10%)',
      yellow: '0 2px 15px rgb(255 168 8 / 50%)',
      red: '0 2px 15px rgb(255 88 110 / 50%)',
      green: '0 2px 15px rgb(2 158 118 / 50%)',
    },
    animation: {
      'left-to-right': 'toLeftFromRight .5s forwards',
      'up-to-down': 'upToDown .3s forwards',
      move1: 'move1 5s infinite',
      move2: 'move2 5s infinite',
      move3: 'move3 5s infinite',
      rotate360: 'rotate360 5s infinite',
    },
    container: {
      center: true,
    },

    extend: {
      borderRadius: {
        hafl: '50%',
      },
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
          '50%': {
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
        rotate360: {
          '0%': {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(-1turn)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      // Add your custom styles here
      addComponents({
        '.text-heading-1': {
          'font-weight': '700',
          'font-size': '54px',
          'line-height': '1.2',
        },
        '.text-heading-2': {
          'font-weight': '700',
          'font-size': '38px',
          'line-height': '1.2',
        },
        '.text-heading-3': {
          'font-weight': '700',
          'font-size': '32px',
          'line-height': '1.2',
        },
        '.text-heading-4': {
          'font-weight': '700',
          'font-size': '25px',
          'line-height': '1.2',
        },
        '.text-heading-5': {
          'font-weight': '700',
          'font-size': '20px',
          'line-height': '1.2',
        },

        '.text-heading-6': {
          'font-weight': '600',
          'font-size': '18px',
          'line-height': '1.2',
        },

        '.text-body-1': {
          'font-weight': '400',
          'font-size': '15px',
          'line-height': '1.2',
        },
        '.text-body-2': {
          'font-weight': '400',
          'font-size': '18px',
          'line-height': '1.2',
        },
        '.text-body-3': {
          'font-weight': '400',
          'font-size': '14px',
          'line-height': '1.2',
        },
      });
    }),
  ],
};
