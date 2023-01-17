import { NextFunction, Request, Response } from 'express';
import IClient from '../../Interfaces/IClient';

import ClientUpdateService from '../../Services/UpdateService/ClientUpdateService';

class ClientUpdateController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ClientUpdateService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ClientUpdateService();
  }

  public async ClientUpdate() {
    const update: IClient = {
      name: this.req.body.name,
      username: this.req.body.username,
      email: this.req.body.email,
      telefone: this.req.body.telefone,
      endereço: this.req.body.endereco,
      cpf: this.req.body.cpf,
      password: ''
    };
  
    try {
      console.log(update)
      const client = await this.service.ClientUpdate(update);
      this.res.status(200).json(client);
    } catch (error) {
        this.next(error);
    }
  }
}

export default ClientUpdateController;