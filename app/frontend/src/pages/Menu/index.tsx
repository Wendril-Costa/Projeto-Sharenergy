import ButtonClientList from "../../components/Buttons/ButtonClientList";
import ButtonHttpCat from "../../components/Buttons/ButtonHttpCat";
import ButtonRandomDog from "../../components/Buttons/ButtonRandomDog";
import ButtonRandomUser from "../../components/Buttons/ButtonRandomUser";
import ButtonSignout from "../../components/Buttons/ButtonSignout";

export const Menu = () => {
    return (
        <div>
        { localStorage.getItem('authToken') ?
                <>
                <h2>Menu</h2>
                <ButtonRandomUser />
                <ButtonHttpCat />
                <ButtonRandomDog />
                <ButtonSignout />
                <ButtonClientList /></>
            :
                ''
        

   }
        </div> 
    );
}