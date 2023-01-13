import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";


export const RandomUser = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/'); 
        auth.signout();
        localStorage.removeItem('checke')
        window.location.href = window.location.href;
    
      }

    return (
        <div>
            <h2>RandomUser</h2>

            Olá {auth.user?.name}, tudo bem?
            {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
    );
}