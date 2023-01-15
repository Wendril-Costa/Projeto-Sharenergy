import { Schema } from 'mongoose';
import IUser from '../Interfaces/IUser';
import AbstractODM from './AbstractODM';

class UserODM extends AbstractODM<IUser> {
  constructor() {
    const schema = new Schema<IUser>({
      username: { type: String, required: true },
      password: { type: String, required: true },
    });
    super(schema, 'User');
  }
}

export default UserODM;