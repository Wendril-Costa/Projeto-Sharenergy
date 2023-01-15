import { useNavigate } from "react-router-dom";
import ButtonHttpCat from "../../components/Buttons/ButtonHttpCat";
import ButtonRandomUser from "../../components/Buttons/ButtonRandomUser";
import ButtonSignout from "../../components/Buttons/ButtonSignout";
import CardDog from "../../components/Cards/CardDog";

export const PageRandomDog = () => {
    const navigate = useNavigate()

    return (
        <main>
            <h2>Random Dog</h2> 
            <ButtonRandomUser />
            <ButtonHttpCat />
            <ButtonSignout />
            <CardDog/>
         </main>
    );
}