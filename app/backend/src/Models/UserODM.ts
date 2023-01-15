import { Schema } from 'mongoose';
import IUserRegister from '../Interfaces/IUserRegister';
import AbstractODM from './AbstractODM';

class UserODM extends AbstractODM<IUserRegister> {
  constructor() {
    const schema = new Schema<IUserRegister >({
      username: { type: String, required: true },
      password: { type: String, required: true },
    });
    super(schema, 'User');
  }
}

export default UserODM;