import { useEffect, useState } from "react"
import { getRandomDog } from "../../utils/getRandomDogPhoto"
import { RandomDogContext } from "./RandomDogContext"

export const ProviderRandomDog = ({ children }: { children: JSX.Element }) => {
    const [dogs, setDogs] = useState('')
    
    useEffect(() => {
        getRandomDog(setDogs)
        }, [])

    const contextValues = {
        dogs,
        setDogs,
    }
    
    return (
        <RandomDogContext.Provider value={ contextValues }>
            {children}
        </RandomDogContext.Provider>
    )
}

