import UserRegister from '../../Domains/user';
import bcrypt from 'bcrypt'
import IUser from '../../Interfaces/IUser';
import UserODM from '../../Models/UserODM';

class UserRegisterService {
  private createUserDomain(register: IUser | null): UserRegister | null {
    if (register) {
      return new UserRegister(register);
    }
    return null;
  }

  public async UserCreate(register: IUser) {
    const passwordHash = await bcrypt.hash(register.password, 8)
    register.password = passwordHash

    const userODM = new UserODM();
    
    const newUser = await userODM.create(register);
    return this.createUserDomain(newUser);
  
  }
}

export default UserRegisterService;