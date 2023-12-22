import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { CartContextProvider } from '@/contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}