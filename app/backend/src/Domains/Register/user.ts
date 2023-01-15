import IUserRegister from '../../Interfaces/IUserRegister';

class UserRegister {
  protected id: string | undefined;
  protected username: string;
  protected password: string;

  constructor(register: IUserRegister) {
    this.id = register.id;
    this.username = register.username;
    this.password = register.password;
  } 
}

export default UserRegister;