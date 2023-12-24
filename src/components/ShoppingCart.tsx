import { CloseButton, FinalizePurchaseButton, ImageContainer, NoItemsInCart, Product, ProductInfo, ShoppingCartContent, Title, Values } from '@/styles/components/ShoppingCart';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

import { Handbag, X } from 'phosphor-react';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import axios from 'axios';

export function ShoppingCart() {

  const { cartItems, removeProductsFromCart, cartTotal } = useCart()
  const cartQuantity = cartItems.length;

  const FormattedCartTotal = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRl',
  }).format(cartTotal);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      
      const response = await axios.post('/api/checkout', {
        products: cartItems,
      })

      const { checkoutUrl } = response.data

      window.location.href= checkoutUrl;
    } catch {
      setIsCreatingCheckoutSession(false)
      alert('Falha no redirecionamento')
    }
  }

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

                <button onClick={() => removeProductsFromCart(cartItem.id)}>
                  Remover
                </button>
              </ProductInfo>
            </Product>
          ))}
        </section>

        <Values>
          <div>
            <p>Quantidade</p>
            <p>{cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}</p>
          </div>

          <div>
            <span>Valor total</span>
            <strong>{FormattedCartTotal}</strong>
          </div>
        </Values>

        <FinalizePurchaseButton
          onClick={handleCheckout}
          disabled={isCreatingCheckoutSession || cartQuantity <= 0}
        >
          Finalizar compra
        </FinalizePurchaseButton>
      </ShoppingCartContent>

    </Dialog.Portal>
  )
}