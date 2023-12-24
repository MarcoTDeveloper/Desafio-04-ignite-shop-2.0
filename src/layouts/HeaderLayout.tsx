import { Container, Header, HeaderButton } from "@/styles/pages/app";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { Handbag } from "phosphor-react";
import Image from "next/image";

import logoImg from '@/assets/logo.svg'
import { ShoppingCart } from "@/components/ShoppingCart";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";

export function HeaderLayout() {
  const { cartItems } = useCart()
  const cartQuantity = cartItems.length;
  const router = useRouter();

  return (
    <Container>
      {router.pathname !== "/success" ? (
        <Header>
          <Link href={'/'}>
            <Image src={logoImg} alt='' />
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <HeaderButton>
                <Handbag size={24} weight='bold' />
                {cartQuantity >= 1 && <span>{cartQuantity}</span>} 
              </HeaderButton>
            </Dialog.Trigger>
            <ShoppingCart />
          </Dialog.Root>

        </Header>
      ) :
        <Header
          style={{ justifyContent: 'center' }}
        >
          <Link href={'/'}>
            <Image src={logoImg} alt='' />
          </Link>
        </Header>
      }
    </Container>
  )
}