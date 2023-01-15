import { NextFunction, Request, Response } from 'express';
import IUser from '../../Interfaces/IUser';
import UserLoginService from '../../Services/LoginService/UserLoginService';

class UserLoginController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserLoginService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserLoginService();
  }

  public async UserLogin() {
    const login: IUser = {
      username: this.req.body.username,
      password: this.req.body.password,
    };

    try {
      const token = await this.service.UserLogin(login);
      console.log(token)
      return this.res.status(200).json(token);
    } catch (error) {
      this.next(error);
    }
  }
}

export default UserLoginController;