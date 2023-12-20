import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  minWidth: 696,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      lineHeight: '160%',
      fontSize: '$lg',
      color: '$gray5',
    },

    span: {
      lineHeight: '140%',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green1'
    },

    button: {
      border: 0,
      backgroundColor: '$green1',
      borderRadius: 6,
      padding: 12,
      color: '$white',
      transition: '0.2s background-color',

      '&:hover': {
        backgroundColor: '$green2',
      }
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})