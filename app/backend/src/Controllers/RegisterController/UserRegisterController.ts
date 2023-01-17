import { NextFunction, Request, Response } from 'express';
import IUser from '../../Interfaces/IUser';
import UserRegisterService from '../../Services/RegisterService/UserRegisterService';

class UserRegisterController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserRegisterService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserRegisterService();
  }

  public async UserCreate() {
    const register: IUser = {
      username: this.req.body.username,
      password: this.req.body.password,
    };

    try {
      const newRegister = await this.service.UserCreate(register);
      console.log(newRegister)
      const result = {
        data: newRegister,
        message: 'Registrado com sucesso'
      }
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default UserRegisterController;