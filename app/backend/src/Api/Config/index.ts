import { Express } from 'express'
import connectToDatabase from '../../Models/Connection'
import appMiddleware from './middleware'

const appConfig = (app: Express): void => {
    connectToDatabase()

    appMiddleware(app)
}


export default appConfig