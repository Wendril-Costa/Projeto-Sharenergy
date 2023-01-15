import Register from '../Domains/Register/index';
// import { ConflictError } from '../err/conflict-error';
import bcrypt from 'bcrypt'
import IRegister from '../Interfaces/IRegister';
import UserODM from '../Models/UserODM';

class RegisterService {
  private createCarDomain(register: IRegister | null): Register | null {
    if (register) {
      return new Register(register);
    }
    return null;
  }

  public async create(register: IRegister) {
    const passwordHash = await bcrypt.hash(register.password, 8)
    register.password = passwordHash

    const userODM = new UserODM();
    
    const newCar = await userODM.create(register);
    return this.createCarDomain(newCar);
  
  }
}

export default RegisterService;