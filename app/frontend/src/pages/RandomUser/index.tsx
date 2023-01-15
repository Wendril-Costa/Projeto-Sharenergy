import { useNavigate } from "react-router-dom"
import ButtonHttpCat from "../../components/Buttons/ButtonHttpCat"
import ButtonRandomDog from "../../components/Buttons/ButtonRandomDog"
import ButtonSignout from "../../components/Buttons/ButtonSignout"
import CardUsers from "../../components/Cards/CardUsers"
import Pagination from "../../components/Pagination"
import UserFilter from "../../components/UserFilter"

export const PageRandomUser = () => {
    const navigate = useNavigate()

    return (
        <main>
            <h2>Random User</h2> 
            <ButtonHttpCat />
            <ButtonRandomDog />
            <ButtonSignout />
            <UserFilter />
            <CardUsers />
            <Pagination />
         </main>
    );
}