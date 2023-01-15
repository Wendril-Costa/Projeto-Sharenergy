import { Schema } from 'mongoose';
import IClientRegister from '../Interfaces/IClientRegister';
import AbstractODM from './AbstractODM';

class ClientODM extends AbstractODM<IClientRegister> {
  constructor() {
    const schema = new Schema<IClientRegister >({
      name: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      telefone: { type: Number, required: false },
      endereço: { type: String, required: true },
      cpf: { type: Number, required: true },
      password: { type: String, required: true },
    });
    super(schema, 'Client');
  }
}

export default ClientODM;