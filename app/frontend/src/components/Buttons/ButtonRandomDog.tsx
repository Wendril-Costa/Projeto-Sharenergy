import { useNavigate } from "react-router-dom"

const ButtonRandomDog = () => {
    const navigate = useNavigate()
    

    return (
        <div>
             <button onClick={() => navigate('/random-dog')  }>Random Dog</button>
        </div>
        
    )
}

export default ButtonRandomDog