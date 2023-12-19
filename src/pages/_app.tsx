import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logoImg from '@/assets/logo.svg'

import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { HeaderButton, Container, Header } from '@/styles/pages/app'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt='' />
        <HeaderButton>
          <Handbag size={24} weight='bold' />
        </HeaderButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
