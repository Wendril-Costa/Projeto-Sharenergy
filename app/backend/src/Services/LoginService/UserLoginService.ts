import UserRegister from '../../Domains/user';
import bcrypt from 'bcrypt'
import IUser from '../../Interfaces/IUser';
import UserODM from '../../Models/UserODM';
import { UnauthorizedError } from '../../err/unauthorized-error';
import checkPassword from '../../utils/checkPassword';
import creatToken from '../../Auth/creatToken';

class UserLoginService {
  public async UserLogin(login: IUser) {
    const userODM = new UserODM()
    const userLogin = await userODM.findByName(login.username);

    if (!userLogin || !checkPassword(userLogin.password, login.password)) {
      throw new UnauthorizedError('Username ou Password são inválidos')
    }

    const { id, username } = userLogin

    const token = creatToken({ id, username })
    return await token
  }
}

export default UserLoginService;