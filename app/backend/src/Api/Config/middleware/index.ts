import express, { Express } from 'express'
import cors from 'cors'

import routes from '../../../Routes/index'
import { errorMiddleware } from '../../../middleware/errorMiddleware'

const appMiddleware = (app: Express): void => {

    app.use(cors({ origin: 'http://localhost:3000'}))
    app.use(express.json())
    app.use(routes)
    app.use(errorMiddleware)
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header('Access-Control-Allow-Credentials', "*");
        res.header('Access-Control-Expose-Headers', 'x-access-token'); //essta linha habilita o token no header
        next();
      });
}


export default appMiddleware