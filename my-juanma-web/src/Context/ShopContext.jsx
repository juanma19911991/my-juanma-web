import { createContext } from "react"

export const ShopContext = createContext();

export const shopcomponentcontext= ({children}) =>{

    return <ShopContext.Provider value = {'hola'}>
        {children}
    </ShopContext.Provider>
}




let condicion = true;


if (condicion){
    console.log("Condicion verdadera");
}
else{
    console.log("Condicion Falsa");
}