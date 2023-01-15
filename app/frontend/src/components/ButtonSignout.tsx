import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/Auth/AuthContext"

const ButtonSignout = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogout = async () => {
    navigate('/')
    auth.signout()
    localStorage.removeItem('checke')
    window.location.href = window.location.href
  }

    return (
        <div>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
        
    )
}

export default ButtonSignout