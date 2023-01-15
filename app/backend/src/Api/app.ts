import express from 'express'
import appConfig from './Config'

const app = express()

appConfig(app)

export default app
