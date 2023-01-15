import { useEffect, useState } from "react"
import { randomDog } from "../../services/randomDogRequests"
import { RandomDogContext } from "./RandomDogContext"

export const ProviderRandomDog = ({ children }: { children: JSX.Element }) => {
    const [dogs, setDogs] = useState('')
    
    useEffect(() => {
      const getRandomDog = async () => {
        const data = await randomDog()
            if (data.includes('.mp4') || data.includes('.webm')) {
                randomDog()
            } else {
                setDogs(data)
            }
      }
      getRandomDog()
      }, [])

    const contextValues = {
        dogs    
    }
    
    return (
        <RandomDogContext.Provider value={ contextValues }>
            {children}
        </RandomDogContext.Provider>
    )
}

