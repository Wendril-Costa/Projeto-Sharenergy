import { useContext, useState } from "react";
import { MyContext } from "../context/UserContext/UserContext";
import Pagination from "./Pagination";

const CardUsers = () => {
    const { users } = useContext(MyContext);

    const [usersPerPage, setUsersPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(users.length / usersPerPage)
    const startIndex = currentPage * usersPerPage
    const endIndex = startIndex + usersPerPage
    const currentUsers = users.slice(startIndex, endIndex)

    return (
        <div>
            <h2>RandomUser</h2>
            
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

            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
        </div>
        
    );
}

export default CardUsers