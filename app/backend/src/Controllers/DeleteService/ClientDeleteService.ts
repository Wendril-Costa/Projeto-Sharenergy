import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../err/not-found';
import IClient from '../../Interfaces/IClient';

import ClientDeleteService from '../../Services/DeleteService/ClientDeleteService';

class ClientDeleteController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ClientDeleteService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ClientDeleteService();
  }

  public async ClientDelete() {
    const deleteClient: IClient = {
      name: this.req.body.name,
      username: this.req.body.username,
      email: this.req.body.email,
      telefone: this.req.body.telefone,
      endereço: this.req.body.endereco,
      cpf: this.req.body.cpf,
      password: ''
    };
    try {
      console.log(deleteClient)
        const client = await this.service.ClientDelete(deleteClient); 

        if (!client) throw new NotFoundError('Client inválido')

        return this.res.status(204).json(client);
      } catch (error) {
        this.next(error);
      }
  }
}

export default ClientDeleteController;