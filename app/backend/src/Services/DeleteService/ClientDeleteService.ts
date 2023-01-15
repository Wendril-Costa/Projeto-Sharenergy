import Client from '../../Domains/client';
import { NotFoundError } from '../../err/not-found';
import IClient from '../../Interfaces/IClient';
import ClientODM from '../../Models/ClientODM';

class ClientDeleteService {
  private createClientDomain(client: IClient | null): Client | null {
    if (client) {
      return new Client(client);
    }
    return null;
  }

  public async ClientDelete(cpf: number) {
    const clientODM = new ClientODM();
    const client = await clientODM.delete(cpf);      
    return this.createClientDomain(client);
  } 
}

export default ClientDeleteService;