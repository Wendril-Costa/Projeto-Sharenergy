import express, { Express } from 'express'
import cors from 'cors'

import router from '../../../Routes/index'

const appMiddleware = (app: Express): void => {

    app.use(cors())
    app.use(express.json())
    app.use(router)
}


export default appMiddleware