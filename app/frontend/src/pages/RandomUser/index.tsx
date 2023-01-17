import CardUsers from "../../components/Cards/CardUsers"
import Pagination from "../../components/Pagination"
import UserFilter from "../../components/UserFilter"

export const PageRandomUser = () => {
    return (
        <main>
            <h2>Random User</h2> 
            <UserFilter />
            <CardUsers />
            <Pagination />
         </main>
    );
}