import Client from '../../Domains/client';
import { NotFoundError } from '../../err/not-found';
import IClient from '../../Interfaces/IClient';
import ClientODM from '../../Models/ClientODM';

class ClientUpdateService {
  private createClientDomain(client: IClient | null): Client | null {
    if (client) {
      return new Client(client);
    }
    return null;
  }

  public async ClientUpdate(update: IClient) {
    const clientODM = new ClientODM();

    const clientUp = await clientODM.findByCpf(update.cpf);
    console.log(clientUp)
    if (!clientUp) throw new NotFoundError('Client inválido')

    const updatedCar = await clientODM.update(update.cpf, update);
    
    return this.createClientDomain(updatedCar);
  }
}

export default ClientUpdateService;