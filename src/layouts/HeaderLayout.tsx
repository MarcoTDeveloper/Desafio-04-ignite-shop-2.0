import { Container, Header, HeaderButton } from "@/styles/pages/app";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { Handbag } from "phosphor-react";
import Image from "next/image";

import logoImg from '@/assets/logo.svg'
import { ShoppingCart } from "@/components/ShoppingCart";

export function HeaderLayout() {
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
    </Container>
  )
}