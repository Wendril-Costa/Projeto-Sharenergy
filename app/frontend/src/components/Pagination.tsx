import { useContext } from 'react'
import { UserContext } from '../context/UserContext/UserContext'
import '../styles/components/pagination/index.css'

const Pagination = () => {
    const { users, usersPerPage, setCurrentPage } = useContext(UserContext)
    const pages = Math.ceil(users.length / usersPerPage)

    return (
        <div>
            {Array.from(Array(pages), (item, index) => {
                return <button 
                            className="paginationButton"
                            value={index} 
                            onClick={e => setCurrentPage(Number((e.target as HTMLTextAreaElement).value))}
                        >
                            {index + 1}
                        </button>
            })}
        </div>
    )
}

export default Pagination