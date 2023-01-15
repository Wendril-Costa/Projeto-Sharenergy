import IUserRegister from "./IUserRegister"

interface IClientRegister extends IUserRegister{
    name: string
    email: string
    telefone: number
    endereço: string
    cpf: number
  }
  
  export default IClientRegister