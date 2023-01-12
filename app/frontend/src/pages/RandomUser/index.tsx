import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const RandomUser = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>RandomUser</h2>

            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}