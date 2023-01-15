import HttpCat from "../../components/HttpCat"
import { useNavigate } from "react-router-dom"

export const PageHttpCat = () => {
    const navigate = useNavigate()

    return (
        <main>
            <h2>Http Cat</h2> 
            <button onClick={() => navigate('/random-user')  }>Random User</button>
            <p>Digite um status Http</p>
            <HttpCat />
            <button onClick={() => navigate('/random-dog')  }>Random Dog</button>
        </main>   
    )
}
