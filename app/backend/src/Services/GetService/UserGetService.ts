import UserGet from '../../Domains/user';
import IUser from '../../Interfaces/IUser';
import UserODM from '../../Models/UserODM';

class UserGetService {
  private createUserDomain(get: IUser | null): UserGet | null {
    if (get) {
      return new UserGet(get);
    }
    return null;
  }

  public async UserGetAll() {
    const userODM = new UserODM();
    const users = await userODM.getAll();
    const userArray = users.map((user: IUser) =>
      this.createUserDomain(user));
    return userArray;
  }
}

export default UserGetService;