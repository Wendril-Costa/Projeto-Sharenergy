import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../err/not-found';

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
    try {
        const { cpf } = this.req.params;   

        const client = await this.service.ClientDelete(Number(cpf)); 

        if (!client) throw new NotFoundError('Client inválido')

        return this.res.status(204).json(client);
      } catch (error) {
        this.next(error);
      }
  }
}

export default ClientDeleteController;