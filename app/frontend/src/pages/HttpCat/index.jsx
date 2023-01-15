import HttpCat from "../../components/HttpCat"
import ButtonSignout from "../../components/Buttons/ButtonSignout"
import ButtonRandomDog from "../../components/Buttons/ButtonRandomDog"
import ButtonRandomUser from "../../components/Buttons/ButtonRandomUser"

export const PageHttpCat = () => {
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
