import { NextFunction, Request, Response } from 'express';
import UserGetService from '../../Services/GetService/UserGetService'

class UserGetController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserGetService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserGetService();
  }

  public async UserGetAll() {
    try {
      const users = await this.service.UserGetAll();
      return this.res.status(200).json(users);
    } catch (error) {
      this.next(error);
    }
  }
}

export default UserGetController;