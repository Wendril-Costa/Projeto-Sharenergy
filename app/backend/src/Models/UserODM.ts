import { Schema } from 'mongoose';
import IRegister from '../Interfaces/IRegister';
import AbstractODM from './AbstractODM';

class UserODM extends AbstractODM<IRegister> {
  constructor() {
    const schema = new Schema<IRegister >({
      name: { type: String, required: true },
      username: { type: String, required: true },
      email: { type: String, required: true },
      telefone: { type: Number, required: false },
      endereço: { type: String, required: true },
      cpf: { type: Number, required: true },
      password: { type: String, required: true },
    });
    super(schema, 'Car');
  }
}

export default UserODM;