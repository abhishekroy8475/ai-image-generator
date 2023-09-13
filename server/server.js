import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080
const url = process.env.MONGO_URI

app.use('/api/v1/dalle', dalleRoutes)
app.use('/api/v1/post', postRoutes)

const startServer = async () => {
    connectDB(url)
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

startServer()