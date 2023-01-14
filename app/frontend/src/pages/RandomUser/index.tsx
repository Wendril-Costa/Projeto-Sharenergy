import CardUsers from "../../components/CardUsers";
import Pagination from "../../components/Pagination";
import UserFilter from "../../components/UserFilter";

// const handleLogout = async () => {
//     navigate('/'); 
//     auth.signout();
//     localStorage.removeItem('checke')
//     window.location.href = window.location.href;
//   }



export const PageRandomUser = () => {

    return (
        <main>
            {/* <h2>RandomUser</h2> */}
            <UserFilter />
            <CardUsers />
            <Pagination />
         </main>
    );
}