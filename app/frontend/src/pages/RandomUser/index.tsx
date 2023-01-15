import { useNavigate } from "react-router-dom"
import ButtonSignout from "../../components/ButtonSignout"
import CardUsers from "../../components/CardUsers"
import Pagination from "../../components/Pagination"
import UserFilter from "../../components/UserFilter"

export const PageRandomUser = () => {
    const navigate = useNavigate()

    return (
        <main>
            <h2>Random User</h2> 
            <button onClick={() => navigate('/http-cat')  }>HttpCat</button>
            <ButtonSignout />
            <UserFilter />
            <CardUsers />
            <Pagination />
         </main>
    );
}