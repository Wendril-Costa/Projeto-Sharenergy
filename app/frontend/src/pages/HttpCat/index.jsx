import HttpCat from "../../components/HttpCat"
import { useNavigate } from "react-router-dom"
import ButtonSignout from "../../components/Buttons/ButtonSignout"
import ButtonRandomDog from "../../components/Buttons/ButtonRandomDog"
import ButtonRandomUser from "../../components/Buttons/ButtonRandomUser"

export const PageHttpCat = () => {
    const navigate = useNavigate()

    return (
        <main>
            <h2>Http Cat</h2> 
            <ButtonRandomDog />
            <ButtonRandomUser />
            <ButtonSignout />
            <p>Digite um status Http</p>
            <HttpCat />
        </main>   
    )
}
