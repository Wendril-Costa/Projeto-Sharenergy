import { useContext, useEffect, useState } from "react"
import { RandomDogContext } from "../../context/RandomDogContext/RandomDogContext"
import { getRandomDog } from "../../utils/getRandomDogPhoto"

const CardDog = () => {
    const { dogs, setDogs } = useContext(RandomDogContext)

    return (
        <div>
            <img
                src={`${dogs}`}
                alt="dog-img"
            />
            <button onClick={() => getRandomDog(setDogs)}>Refresh</button>
        </div>
        
    )
}

export default CardDog