import { HeaderLayout } from "@/layouts/HeaderLayout";
import { ReactNode, createContext, useState } from "react";

export interface InfoProducts {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextType {
  cartItems: InfoProducts[];
  cartTotal: number;
  addProductsInCart: (product: InfoProducts) => void;
  removeProductsFromCart: (productId: string) => void;
  productAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItem] = useState<InfoProducts[]>([])

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0)

  function addProductsInCart(product: InfoProducts) {
    setCartItem((state) => [...state, product])
  }

  function removeProductsFromCart(productId: string) {
    setCartItem((state) => state.filter((item) => item.id !== productId))
  }

  function productAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addProductsInCart,
        productAlreadyExists,
        removeProductsFromCart,
      }}
    >
      <>
        <HeaderLayout />
        {children}
      </>
    </CartContext.Provider>
  )
}