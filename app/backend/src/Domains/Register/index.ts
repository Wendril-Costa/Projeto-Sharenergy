import IRegister from '../../Interfaces/IRegister';

class Register {
  protected id: string | undefined;
  protected name: string;
  protected username: string;
  protected email: string;
  protected telefone: number;
  protected endereço: string;
  protected cpf: number;
  protected password: string;

  constructor(register: IRegister) {
    this.id = register.id;
    this.name = register.name;
    this.username = register.username;
    this.email = register.email;
    this.telefone = register.telefone;
    this.endereço = register.endereço;
    this.cpf = register.cpf;
    this.password = register.password;
  } 
}

export default Register;