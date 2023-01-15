import { useContext } from "react"
import { RandomUserContext } from "../../context/UserContext/RandomUserContext"
import { usersFilter } from "../UserFilter"

const CardUsers = () => {
    const { currentPage, usersPerPage } = useContext(RandomUserContext)

    const startIndex = currentPage * usersPerPage
    const endIndex = startIndex + usersPerPage
    const currentUsers = usersFilter().slice(startIndex, endIndex)

    return (
        <div>
            {currentUsers.map(({ login, picture, name: { first, last }, email, registered: { age } }: any) => (
                    <div key={login.uuid}>
                        <img
                            src={picture.large}
                            className="profile-pic"
                            alt="profile-img"
                        />
                        <div>
                        <p>{`${first} ${last}`}</p>
                        <p>{email}</p>
                        <p>{login.username}</p>
                        <p>{age}</p>
                        </div>
                    </div>
                ))
              }
        </div>
        
    )
}

export default CardUsers