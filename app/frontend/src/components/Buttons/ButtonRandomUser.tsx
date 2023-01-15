import { useNavigate } from "react-router-dom"

const ButtonRandomUser = () => {
    const navigate = useNavigate()
    

    return (
        <div>
             <button onClick={() => navigate('/random-user')  }>Random User</button>
        </div>
        
    )
}

export default ButtonRandomUser