import { useContext, useEffect } from 'react'
import { ClientContext } from '../context/ClientContext/ClientContext'
import { requests } from '../services/clientRequests'
import '../styles/components/pagination/index.css'

const ClientList = () => {
    const { client, setClient } = useContext(ClientContext)
    const api = requests()

    useEffect(() => {
        const getClient = async () => {
            const token = localStorage.getItem('authToken')
            const getClients = await api.get('/client-get', token)
            console.log(getClients)
            setClient(getClients);
        }
        getClient();
      }, []);
      
    return (
        <main>
        <section className="table-section">
        
          <table className="invoice-table">
            <tbody className='tbody-table'>
              {
                client.map(({ cpf, email, endereço, name, telefone, username}: any, index: any) => (
                  <tr key={ index + 1 } > 
                      <div className='row-second'>
                        <div className="name" data-testid={`name_data_testid${index + 1}`} >
                            NAME: {name}
                          </div>
                        <div className="username" data-testid={`username_data_testid${index + 1}`}>
                            USERNAME: {username}
                        </div>
                        <div className="cpf" data-testid={`cpf_fiscais_data_testid${index + 1}`}>
                          CPF:{cpf}
                        </div>
                        <div className="email" data-testid={`email_data_testid${index + 1}`}>
                          EMAIL:{ email}
                        </div>
                        <div className="endereco" data-testid={`endereço_data_testid${index + 1}`}>
                          ENDEREÇO:{endereço}
                        </div>
                       
                        <div className="telefone" data-testid={`telefone_data_testid${index + 1}`}>
                          TELEFONE: {telefone}
                        </div>
                          <hr/>
                      </div>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>
      </main>
    )
}

export default ClientList