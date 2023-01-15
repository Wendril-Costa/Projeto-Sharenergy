import { Router } from 'express'
import ClientRegisterController from '../Controllers/ClientRegisterController';
import UserRegisterController from '../Controllers/UserRegisterController';


const routes = Router()

routes.get('/', (req,res) => res.send("Funcionando"))

routes.post(
    '/client-register',
    (req, res, next) => new ClientRegisterController(req, res, next).ClientCreate(),
  );

  routes.post(
    '/user-register',
    (req, res, next) => new UserRegisterController(req, res, next).UserCreate(),
  );  

export default routes