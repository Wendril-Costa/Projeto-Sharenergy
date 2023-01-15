import { useEffect, useState } from "react"
import { randomUser } from "../../services/randomUserRequests"
import { RandomUserContext } from "./RandomUserContext"

export const ProviderUser = ({ children }: { children: JSX.Element }) => {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')
    const [userFilter, setUserFilter] = useState('')
    const [usersPerPage, setUsersPerPage] = useState(4)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
      const getUsers = async () => {
        const data = await randomUser('?results=70')
        setUsers(data.results)
      }
      getUsers()
      }, [])

    const contextValues = {
        users,
        filter,
        setFilter,
        usersPerPage,
        setUsersPerPage,
        currentPage,
        setCurrentPage,
        userFilter,
        setUserFilter,
      }
    
    return (
        <RandomUserContext.Provider value={ contextValues }>
            {children}
        </RandomUserContext.Provider>
    )
}