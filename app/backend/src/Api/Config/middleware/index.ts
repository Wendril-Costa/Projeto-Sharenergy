import express, { Express } from 'express'
import cors from 'cors'

import routes from '../../../Routes/index'
import { errorMiddleware } from '../../../middleware/errorMiddleware'

const appMiddleware = (app: Express): void => {

    app.use(cors({ origin: 'http://localhost:3000'}))
    app.use(express.json())
    app.use(routes)
    app.use(errorMiddleware)
}


export default appMiddleware