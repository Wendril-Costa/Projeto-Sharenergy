import { useNavigate } from "react-router-dom"

const ButtonClientList= () => {
    const navigate = useNavigate()
    

    return (
        <div>
             <button onClick={() => navigate('/client-list')  }>Client List</button>
        </div>
        
    )
}

export default ButtonClientList