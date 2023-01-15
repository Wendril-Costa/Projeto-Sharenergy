import { Router } from 'express'
import ClientGetController from '../Controllers/ClientGetRegister';
import ClientRegisterController from '../Controllers/ClientRegisterController';
import UserGetController from '../Controllers/UserGetRegister';
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

routes.get(
  '/client-get',
  (req, res, next) => new ClientGetController(req, res, next).ClientGetAll(),
);  

routes.get(
  '/user-get',
  (req, res, next) => new UserGetController(req, res, next).UserGetAll(),
); 


export default routes