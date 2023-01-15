import { Router } from 'express'
import RegisterController from '../Controllers/RegisterController';


const routes = Router()

routes.get('/', (req,res) => res.send("Funcionando"))

routes.post(
    '/register',
    (req, res, next) => new RegisterController(req, res, next).create(),
  );

export default routes