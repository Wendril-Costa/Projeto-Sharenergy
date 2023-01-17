import { useState } from "react"
import { ClientContext } from "./ClientContext"

export const ProviderClient = ({ children }: { children: JSX.Element }) => {
    const [client, setClient] = useState([])
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cpf, setCpf] = useState('')

    const contextValues = {
        client,
        setClient,
        name,
        setName,
        username,
        setUsername,
        email,
        setEmail,
        telefone,
        setTelefone,
        endereco,
        setEndereco,
        cpf,
        setCpf
      }
    
    return (
        <ClientContext.Provider value={ contextValues }>
            {children}
        </ClientContext.Provider>
    )
}