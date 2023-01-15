import { Router } from 'express'
import app from '../Api/app'

const router = Router()

router.get('/', (req,res) => res.send("Funcionando"))

export default router