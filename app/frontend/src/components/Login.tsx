import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/Auth/AuthContext"

const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(localStorage.getItem('checke') === 'true')

    useEffect(() => {
        if (checked === true) {
             navigate('/random-user')
        }
    }, [])


    const handleLogin = async () => {
        if (username && password) {
            const isLogged = await auth.signin(username, password)
            if (isLogged) {
                navigate('/random-user')
            } else {
                alert("Não deu certo.")
            }
        }
    }

    return (
        <div>
            <h2>Login</h2>

            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite sua senha"
            />

            <input
               type="checkbox"
               onChange={
                (e) => {
                  localStorage.setItem('checke',`${e.target.checked}`)
                  setChecked(e.target.checked)
                  console.log(e.target.checked)
                }
            }
            />
            <label>Remember me</label>
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}

export default Login