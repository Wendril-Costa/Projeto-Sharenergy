import { NextFunction, Request, Response } from 'express';
import ClientGetService from '../Services/ClientGetService'

class ClientGetController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: ClientGetService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new ClientGetService();
  }

  public async ClientGetAll() {
    try {
      const clients = await this.service.ClientGetAll();
      return this.res.status(200).json(clients);
    } catch (error) {
      this.next(error);
    }
  }
}

export default ClientGetController;