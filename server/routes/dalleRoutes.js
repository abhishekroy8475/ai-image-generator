import express from 'express'
import { generateImage } from '../controllers/dolleControllers.js'

const router = express.Router()

router.post('/', generateImage)

export default router