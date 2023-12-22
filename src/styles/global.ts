import { globalCss } from "."

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '::-webkit-scrollbar': {
      width: '0.7rem',
    },

    '::-webkit-scrollbar-track': {
      background: '$gray3',
      borderRadius: 50,
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: 50,
      background: '$green2',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '$green1',
    }
  },

  body: {
    backgroundColor: '$gray1',
    color: '$gray5',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none'
  },

})