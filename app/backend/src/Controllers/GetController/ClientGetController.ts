import { NextFunction, Request, Response } from 'express';
import ClientGetService from '../../Services/GetService/ClientGetService'

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
      const { authorization: token } = this.req.headers
      console.log(this.req.headers)
  
      const clients = await this.service.ClientGetAll(token);
      return this.res.status(200).json(clients);
    } catch (error) {
      this.next(error);
    }
  }
}

export default ClientGetController;