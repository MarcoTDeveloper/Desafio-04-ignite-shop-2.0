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
})
