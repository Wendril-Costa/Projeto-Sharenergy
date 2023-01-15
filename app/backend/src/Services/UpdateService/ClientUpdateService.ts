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

  public async ClientUpdate(cpf: number, body: IClient) {
    const clientODM = new ClientODM();

    const clientUp = await clientODM.findByCpf(cpf);

    if (!clientUp) throw new NotFoundError('Client inválido')

    const updatedCar = await clientODM.update(cpf, body);
    
    return this.createClientDomain(updatedCar);
  }
}

export default ClientUpdateService;