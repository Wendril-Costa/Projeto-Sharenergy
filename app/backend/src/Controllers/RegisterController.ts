import { NextFunction, Request, Response } from 'express';
// import HttpError from '../Errors/HttpError';
import IRegister from '../Interfaces/IRegister';
import RegisterService from '../Services/RegisterService';

class RegisterController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: RegisterService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new RegisterService();
  }

  public async create() {
    const register: IRegister = {
      name: this.req.body.name,
      username: this.req.body.username,
      email: this.req.body.email,
      telefone: this.req.body.telefone,
      endereço: this.req.body.endereço,
      cpf: this.req.body.cpf,
      password: this.req.body.password,
    };

    try {
      const newRegister = await this.service.create(register);
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

export default RegisterController;