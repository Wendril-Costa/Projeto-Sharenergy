import { useEffect, useState } from "react"
import { requests } from '../../services/loginRequests'
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null)
    const api = requests()

    useEffect(() => {
        localStorage.getItem('authToken')
    }, [])

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password)
        if (data.token) {
            setUser(data.user)
            setToken(data.token)
            return true
        }
        return false
    }

    const signout = async () => {
        console.log("signout está sendo executada.")
        setUser(null)
        setToken('')
        await api.logout()
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token)
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}