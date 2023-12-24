import { styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

export const ShoppingCartContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  maxWidth: 480,
  height: '100%',
  backgroundColor: '$gray2',
  padding: '3rem',
  top: 0,
  right: 0,
  boxShadow: '-40px 3px 30px 0px rgba(0,0,0,0.5)',

  section: {
    height: '100%',
    overflowY: 'auto'
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  color: '$gray3',
  transition: '0.2s filter',

  '&:hover': {
    filter: 'brightness(1.7)'
  }
})

export const Title = styled(Dialog.Title, {
  lineHeight: 1.6,
  fontWeight: 'bold',
  fontSize: '$lg',
  color: '$gray5',
  marginTop: '1.5rem',
})

export const Product = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  img: {
    objectFit: 'cover',
  }
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 8,

  span: {
    color: '$gray4',
    lineHeight: 1.6,
    fontSize: '$md'
  },

  strong: {
    lineHeight: 1.6,
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white'
  },

  button: {
    border: 0,
    background: 'none',
    color: '$green2',
    fontSize: '1rem',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green1',
    }
  },
})

export const Values = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 1.6
  },

  p: {
    color: '$gray4'
  },

  span: {
    color: '$gray5',
    fontWeight: 'bold',
  },

  strong: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray5'
  },

})

export const FinalizePurchaseButton = styled('button', {
  marginTop: '3.3rem',
  width: '100%',
  border: 0,
  padding: '20px 124.5px',
  borderRadius: 8,
  backgroundColor: '$green2',
  color: '$gray5',
  transition: '0.2s background-color, color',

  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: 1.6,

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed'
  },

  '&:(:disabled):hover': {
    backgroundColor: '$green1',
    color: '$white',
  }
})

export const NoItemsInCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  width: 150,
  borderRadius: 7,
  padding: 16,
  margin: '9rem auto',

  outline: '3px solid $gray3',

  svg: {
    color: '$gray3'
  },

  span: {
    color: '$gray3',
    fontSize: '$lg',
    fontFamily: 'serif'
  }

})