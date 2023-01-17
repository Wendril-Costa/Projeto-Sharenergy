import { NextFunction, Request, Response } from 'express';
import IClient from '../../Interfaces/IClient';
import ClientRegisterService from '../../Services/RegisterService/ClientRegisterService';

class ClientRegisterController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ClientRegisterService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ClientRegisterService();
  }

  public async ClientCreate() {
    const register: IClient = {
      name: this.req.body.name,
      username: this.req.body.username,
      email: this.req.body.email,
      telefone: this.req.body.telefone,
      endereço: this.req.body.endereco,
      cpf: this.req.body.cpf,
      password: ''
    };

    try {
      console.log(register)
      const newRegister = await this.service.ClientCreate(register);
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

export default ClientRegisterController;