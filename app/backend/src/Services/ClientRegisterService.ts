import ClientRegister from '../Domains/Register/client';
// import { ConflictError } from '../err/conflict-error';
import bcrypt from 'bcrypt'
import IClientRegister from '../Interfaces/IClientRegister';
import ClientODM from '../Models/ClientODM';

class ClientRegisterService {
  private createClientDomain(register: IClientRegister | null): ClientRegister | null {
    if (register) {
      return new ClientRegister(register);
    }
    return null;
  }

  public async ClientCreate(register: IClientRegister) {
    const passwordHash = await bcrypt.hash(register.password, 8)
    register.password = passwordHash

    const userODM = new ClientODM();
    
    const newClient = await userODM.create(register);
    return this.createClientDomain(newClient);
  
  }
}

export default ClientRegisterService;