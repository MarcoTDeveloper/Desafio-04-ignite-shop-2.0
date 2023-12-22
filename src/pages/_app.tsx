import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logoImg from '@/assets/logo.svg'

import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { HeaderButton, Container, Header } from '@/styles/pages/app'

import * as Dialog from '@radix-ui/react-dialog';
import { ShoppingCart } from '@/components/ShoppingCart'
import { useRouter } from 'next/router'
import { CartContextProvider } from '@/contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Container>

      {router.pathname !== "/success" ? (
        <Header>
          <Image src={logoImg} alt='' />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <HeaderButton>
                <Handbag size={24} weight='bold' />
                {/* {cartQuantity >= 1 && } */}
                <span>1</span>
              </HeaderButton>
            </Dialog.Trigger>
            <ShoppingCart />
          </Dialog.Root>

        </Header>
      ) :
        <Header
          style={{ justifyContent: 'center' }}
        >
          <Image src={logoImg} alt='' />
        </Header>
      }

      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}