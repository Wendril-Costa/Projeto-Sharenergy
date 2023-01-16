import { Router } from 'express'
import ClientGetController from '../Controllers/GetController/ClientGetController';
import ClientRegisterController from '../Controllers/RegisterController/ClientRegisterController';
import UserGetController from '../Controllers/GetController/UserGetController';
import UserRegisterController from '../Controllers/RegisterController/UserRegisterController';
import UserLoginController from '../Controllers/LoginController/UserLoginController';
import ClientUpdateController from '../Controllers/UpdateService/ClientUpdateService';
import ClientDeleteController from '../Controllers/DeleteService/ClientDeleteService';


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

routes.post(
  '/signin',
  (req, res, next) => new UserLoginController(req, res, next).UserLogin(),
); 

routes.put(
  '/client/:name',
  (req, res, next) => new ClientUpdateController(req, res, next).ClientUpdate(),
);

routes.delete(
  '/client/:name',
  (req, res, next) => new ClientDeleteController(req, res, next).ClientDelete(),
);

export default routes