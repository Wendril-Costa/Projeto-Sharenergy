import ButtonHttpCat from "../../components/Buttons/ButtonHttpCat";
import ButtonRandomUser from "../../components/Buttons/ButtonRandomUser";
import ButtonSignout from "../../components/Buttons/ButtonSignout";
import CardDog from "../../components/Cards/CardDog";

export const PageRandomDog = () => {

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