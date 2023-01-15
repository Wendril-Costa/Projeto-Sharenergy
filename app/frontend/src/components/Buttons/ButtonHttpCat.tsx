import { useNavigate } from "react-router-dom"

const ButtonHttpCat= () => {
    const navigate = useNavigate()
    

    return (
        <div>
             <button onClick={() => navigate('/http-cat')  }>Http Cat</button>
        </div>
        
    )
}

export default ButtonHttpCat