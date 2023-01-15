import { useState } from "react"
import { HttpCatContext } from "./HttpCatContext"

export const ProviderHttpCat = ({ children }: { children: JSX.Element }) => {
    const [statusCat, setStatusCat] = useState('')

    const contextValues = {
        statusCat,
        setStatusCat
      }
    
    return (
        <HttpCatContext.Provider value={ contextValues }>
            {children}
        </HttpCatContext.Provider>
    )
}