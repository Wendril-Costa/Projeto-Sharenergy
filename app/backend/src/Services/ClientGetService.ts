import ClientGet from '../Domains/Register/client';
import IClient from '../Interfaces/IClient';
import ClientODM from '../Models/ClientODM';

class ClientGetService {
  private createClientDomain(get: IClient | null): ClientGet | null {
    if (get) {
      return new ClientGet(get);
    }
    return null;
  }

  public async ClientGetAll() {
    const clientODM = new ClientODM();
    const clients = await clientODM.getAll();
    const clientArray = clients.map((client: IClient) =>
      this.createClientDomain(client));
    return clientArray;
  }
}

export default ClientGetService;