import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
  overflow: 'hidden',

  h1: {
    fontSize: '$2xl',
    color: '$gray5',
  },

  p: {
    fontSize: '$xl',
    color: '$gray4',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    color: '$green2',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',

    '&:hover': {
      color: '$green1',
    }
  }

})

export const ProductsSales = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '3.5rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  marginBottom: '3rem',
  marginLeft: -52,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})