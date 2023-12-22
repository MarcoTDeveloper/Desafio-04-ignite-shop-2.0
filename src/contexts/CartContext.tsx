import { ReactNode, createContext } from "react";

interface CartContextType {

}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {


  return (
    <CartContext.Provider value={{

    }}>
      {children}
    </CartContext.Provider>
  )
}