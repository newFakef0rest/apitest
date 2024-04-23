import { createContext, useContext } from "react";
import order from "../store/order";

type TOrderStateContext = {
    order: typeof order
}

const OrderStateContext = createContext<TOrderStateContext>({} as TOrderStateContext)

export const OrderStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <OrderStateContext.Provider value={{order}}>
            {children}
        </OrderStateContext.Provider>
    )
}

export const useOrderStore = () => useContext(OrderStateContext)