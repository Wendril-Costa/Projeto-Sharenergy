import { useContext } from "react"
import { RandomUserContext } from "../context/UserContext/RandomUserContext"

export const usersFilter = () => {
    const { users, filter } = useContext(RandomUserContext)

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
    const { filter, setFilter } = useContext(RandomUserContext)
    
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