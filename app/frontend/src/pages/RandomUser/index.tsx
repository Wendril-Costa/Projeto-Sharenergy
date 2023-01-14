import ButtonSignout from "../../components/ButtonSignout";
import CardUsers from "../../components/CardUsers";
import Pagination from "../../components/Pagination";
import UserFilter from "../../components/UserFilter";

export const PageRandomUser = () => {

    return (
        <main>
            <h2>RandomUser</h2> 
            <ButtonSignout />
            <UserFilter />
            <CardUsers />
            <Pagination />
         </main>
    );
}