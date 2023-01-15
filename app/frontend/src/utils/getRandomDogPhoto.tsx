import { randomDog } from "../services/randomDogRequests"


export const getRandomDog = async (setDogs: any) => {
    const data = await randomDog()
        if (data.includes('.mp4') || data.includes('.webm')) {
            randomDog()
        } else {
            setDogs(data)
        }
  }