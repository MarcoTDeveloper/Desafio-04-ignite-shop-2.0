import { HeaderLayout } from "@/layouts/HeaderLayout";
import { ReactNode, createContext, useState } from "react";

export interface InfoProducts {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextType {
  cartItems: InfoProducts[];
  addProductsInCart: (product: InfoProducts) => void;
  productAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItem] = useState<InfoProducts[]>([])

  function addProductsInCart(product: InfoProducts) {
    setCartItem((state) => [...state, product])
  }

  function productAlreadyExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductsInCart,
        productAlreadyExists,
      }}
    >
      <>
        <HeaderLayout />
        {children}
      </>
    </CartContext.Provider>
  )
}