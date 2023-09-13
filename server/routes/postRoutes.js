import express from 'express'
import { createPost, fetchPost } from '../controllers/postControllers.js'

const router = express.Router()

router.post('/', createPost)
router.get('/', fetchPost)

export default router