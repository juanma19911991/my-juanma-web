import { createContext } from "react"

export const ShopContext = createContext();

export const shopcomponentcontext= ({children}) =>{

    return <ShopContext.Provider value = {'hola'}>
        {children}
    </ShopContext.Provider>
}




