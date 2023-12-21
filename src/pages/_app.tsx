import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logoImg from '@/assets/logo.svg'

import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { HeaderButton, Container, Header } from '@/styles/pages/app'

import * as Dialog from '@radix-ui/react-dialog';
import { ShoppingCart } from '@/components/ShoppingCart'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton><Handbag size={24} weight='bold' /></HeaderButton>
          </Dialog.Trigger>

          <ShoppingCart />

        </Dialog.Root>

      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
