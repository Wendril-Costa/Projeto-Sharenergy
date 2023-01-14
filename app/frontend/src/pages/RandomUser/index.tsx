import CardUsers from "../../components/CardUsers";
import { ProviderUser } from '../../context/UserContext/ProviderUser';

// const handleLogout = async () => {
//     navigate('/'); 
//     auth.signout();
//     localStorage.removeItem('checke')
//     window.location.href = window.location.href;
//   }



export const PageRandomUser = () => {

    return (
        <ProviderUser>
            <CardUsers />
        </ProviderUser>
    );
}