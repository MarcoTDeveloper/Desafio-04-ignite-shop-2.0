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
  cartItem: InfoProducts[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState<InfoProducts[]>([])

  return (
    <CartContext.Provider
      value={{
        cartItem,
      }}
    >
      <>
        <HeaderLayout />
        {children}
      </>
    </CartContext.Provider>
  )
}