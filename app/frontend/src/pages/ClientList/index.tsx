import ClientList from "../../components/ClientList"
import ClientRegister from "../../components/Client"


export const PageClient = () => {

    return (
        <main>
            <h2>Lista de clientes</h2>
            <ClientList />
            <ClientRegister />
        </main>   
    )
}