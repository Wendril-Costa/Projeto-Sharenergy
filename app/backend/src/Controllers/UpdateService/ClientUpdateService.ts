import { NextFunction, Request, Response } from 'express';

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
    const { body } = this.req;
    const { cpf } = this.req.params;
    try {
      const client = await this.service.ClientUpdate(Number(cpf), body);
      this.res.status(200).json(client);
    } catch (error) {
        this.next(error);
    }
  }
}

export default ClientUpdateController;