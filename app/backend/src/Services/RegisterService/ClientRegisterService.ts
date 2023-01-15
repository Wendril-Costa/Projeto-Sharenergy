import ClientRegister from '../../Domains/client';
import bcrypt from 'bcrypt'
import IClient from '../../Interfaces/IClient';
import ClientODM from '../../Models/ClientODM';

class ClientRegisterService {
  private createClientDomain(register: IClient | null): ClientRegister | null {
    if (register) {
      return new ClientRegister(register);
    }
    return null;
  }

  public async ClientCreate(register: IClient) {
    const passwordHash = await bcrypt.hash(register.password, 8)
    register.password = passwordHash

    const userODM = new ClientODM();
    
    const newClient = await userODM.create(register);
    return this.createClientDomain(newClient);
  
  }
}

export default ClientRegisterService;