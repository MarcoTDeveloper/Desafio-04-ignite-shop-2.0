import { CloseButton, FinalizePurchaseButton, ImageContainer, NoItemsInCart, Product, ProductInfo, ShoppingCartContent, Title, Values } from '@/styles/components/ShoppingCart';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

import { Handbag, X } from 'phosphor-react';
import { useCart } from '@/hooks/useCart';

export function ShoppingCart() {

  const { cartItems } = useCart()
  const cartQuantity = cartItems.length;

  return (
    <Dialog.Portal>

      <ShoppingCartContent>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Title>Sacola de compras</Title>

        <section>
          {cartQuantity <= 0 &&
            <NoItemsInCart>
              <Handbag size={100} weight='thin' />
              <span>sacola vazia</span>
            </NoItemsInCart>
          }

          {cartItems.map((cartItem) => (
            <Product key={cartItem.id}>
              <ImageContainer>
                <Image src={cartItem.imageUrl} width={94.8} height={94.8} alt="" />
              </ImageContainer>

              <ProductInfo>
                <span>{cartItem.name}</span>
                <strong>{cartItem.price}</strong>

                <button onClick={() => console.log('removeu')}>
                  Remover
                </button>
              </ProductInfo>
            </Product>
          ))}
        </section>

        <Values>
          <div>
            <p>Quantidade</p>
            <p>{cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}</p>
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