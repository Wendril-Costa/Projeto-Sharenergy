import { useContext, useEffect, useState } from "react"
import { RandomDogContext } from "../../context/RandomDogContext/RandomDogContext"
import { randomDog } from "../../services/randomDogRequests"


const CardDog = () => {
    const { dogs } = useContext(RandomDogContext)
    console.log(dogs)

    return (
        <div>
            <img
                src={`${dogs}`}
                alt="dog-img"
            />
            <button onClick={() => location.reload()}>Refresh</button>
        </div>
        
    )
}

export default CardDog