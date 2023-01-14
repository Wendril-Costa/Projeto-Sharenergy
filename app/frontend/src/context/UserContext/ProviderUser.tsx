import { useEffect, useState } from "react";
import { randomUser } from "../../services/randomUserRequests";
import { MyContext } from "./UserContext";

export const ProviderUser = ({ children }: { children: JSX.Element }) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      const getUsers = async () => {
        const data = await randomUser('?results=50')
        console.log(data.results)
        setUsers(data.results)
      }
      getUsers();
      }, []);

    const contextValues = {
        users
      };
    
    return (
        <MyContext.Provider value={ contextValues }>
            {children}
        </MyContext.Provider>
    );
}