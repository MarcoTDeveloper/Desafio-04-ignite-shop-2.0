import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const HeaderButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  backgroundColor: '$gray2',
  padding: 12,
  borderRadius: 6,
  color: '$gray3',
  position: 'relative',
  transition: '0.2s background-color',

  '&:hover': {
    backgroundColor: '#353536',
  },

  span: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: '$green1',
    color: '$white',
    borderRadius: '50%',
    outline: '3px solid $gray1',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 14,
    fontWeight: 'bold',

    top: 'calc(-0.8rem / 2)',
    right: 'calc(-0.8rem / 2)',
  },

})