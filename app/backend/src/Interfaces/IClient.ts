import IUser from "./IUser"

interface IClient extends IUser{
    name: string
    email: string
    telefone: number
    endereço: string
    cpf: number
  }
  
  export default IClient