import { useContext, useEffect } from 'react'
import { ClientContext } from '../context/ClientContext/ClientContext'
import { requests } from '../services/clientRequests'

const ClientRegister = () => {
    const { 
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
        setCpf } = useContext(ClientContext)

    const api = requests()

    const handleRegister= async () => {
        await api.create({name, username, email, telefone, endereco, cpf})
        location.reload()
    }

    const handleAtualizar= async () => {
        await api.update({name, username, email, telefone, endereco, cpf})
        location.reload()
    }

    const handleDeletar= async () => {
        console.log(cpf)
        await api.delete({name, username, email, telefone, endereco, cpf})
        location.reload()
    }
    return (
        <div>
            <h2>Registrar</h2>
            <h2>Para atualizar Digite o CPF corretamente</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite seu name"
            />
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Digite seu username"
            />
             <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
            />
             <input
                type="text"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                placeholder="Digite seu telefone"
            />
             <input
                type="text"
                value={endereco}
                onChange={e => setEndereco(e.target.value)}
                placeholder="Digite seu endereco"
            />
             <input
                type="text"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                placeholder="Digite seu cpf"
            />

        
            <button onClick={handleRegister}>Registrar</button>
            <div>
            <button onClick={handleAtualizar}>Atualizar</button>
            </div>
            <div>
            <button onClick={handleDeletar}>Deletar</button>
            </div>
        </div>
    )
}

export default ClientRegister