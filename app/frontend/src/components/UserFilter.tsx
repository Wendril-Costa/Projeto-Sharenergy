import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";

export const usersFilter = () => {
    const { users, filter } = useContext(UserContext);
    
    const searchLowerCase = filter.toLowerCase()

    return users.filter(
        ({ name: { first, last }, email, login: { username }}: any) =>
            first.toLowerCase().includes(searchLowerCase) ||
            last.toLowerCase().includes(searchLowerCase) ||
            email.toLowerCase().includes(searchLowerCase) ||
            username.toLowerCase().includes(searchLowerCase)
    )
}

const UserFilter = () => {
    const { filter, setFilter } = useContext(UserContext);
    
    return (
        <div>
            <input  
                id="search"
                data-testid="filter"
                type="text"
                value={ filter }
                onChange={ (search) => setFilter(search.target.value)}
            />
        </div>
    )
}

export default UserFilter