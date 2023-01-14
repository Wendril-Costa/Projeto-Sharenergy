import { useContext } from "react";
import { MyContext } from "../context/UserContext/UserContext";

const CardUsers = () => {
    const {
       users
    } = useContext(MyContext);

    return (
        <div>
            <h2>RandomUser</h2>
            {
                users.map(({ login, picture, name: { first, last }, email, registered: { age } }: any, index: number) => (
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
        
    );
}

export default CardUsers