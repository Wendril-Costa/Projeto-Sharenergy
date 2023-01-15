import UserRegister from '../Domains/Register/user';
import bcrypt from 'bcrypt'
import IUserRegister from '../Interfaces/IUserRegister';
import UserODM from '../Models/UserODM';

class UserRegisterService {
  private createUserDomain(register: IUserRegister | null): UserRegister | null {
    if (register) {
      return new UserRegister(register);
    }
    return null;
  }

  public async UserCreate(register: IUserRegister) {
    const passwordHash = await bcrypt.hash(register.password, 8)
    register.password = passwordHash

    const userODM = new UserODM();
    
    const newUser = await userODM.create(register);
    return this.createUserDomain(newUser);
  
  }
}

export default UserRegisterService;