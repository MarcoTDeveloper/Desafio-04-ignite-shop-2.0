import { CloseButton, FinalizePurchaseButton, ImageContainer, Product, ProductInfo, ShoppingCartContent, Title, Values } from '@/styles/components/ShoppingCart';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

import imageTest from '@/assets/+PLUS-T-shirttransparente 1.png'
import { X } from 'phosphor-react';

export function ShoppingCart() {
  return (
    <Dialog.Portal>

      <ShoppingCartContent>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Title>Sacola de compras</Title>

        <Product>
          <ImageContainer>
            <Image src={imageTest} width={94.8} height={94.8} alt="" />
          </ImageContainer>

          <ProductInfo>
            <span>Camiseta Beyond the Limits</span>
            <strong>R$ 99,90</strong>

            <button>
              Remover
            </button>
          </ProductInfo>
        </Product>

        <Values>
          <div>
            <p>Quantidade</p>
            <p>3 item</p>
          </div>

          <div>
            <span>Valor total</span>
            <strong>R$ 299,70</strong>
          </div>
        </Values>

        <FinalizePurchaseButton>
          Finalizar compra
        </FinalizePurchaseButton>
      </ShoppingCartContent>

    </Dialog.Portal>
  )
}