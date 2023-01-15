import { useContext } from 'react'
import { RandomUserContext } from '../context/UserContext/RandomUserContext'
import '../styles/components/pagination/index.css'

const Pagination = () => {
    const { users, usersPerPage, setCurrentPage } = useContext(RandomUserContext)
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