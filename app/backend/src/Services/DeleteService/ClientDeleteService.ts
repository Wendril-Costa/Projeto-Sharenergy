import Client from '../../Domains/client';
import IClient from '../../Interfaces/IClient';
import ClientODM from '../../Models/ClientODM';

class ClientDeleteService {
  private createClientDomain(client: IClient | null): Client | null {
    if (client) {
      return new Client(client);
    }
    return null;
  }

  public async ClientDelete(deleteClient: IClient) {
    const clientODM = new ClientODM();
    const client = await clientODM.delete(deleteClient.cpf);      
    return this.createClientDomain(client);
  } 
}

export default ClientDeleteService;