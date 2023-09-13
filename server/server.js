import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/connectDB.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080
const url = process.env.MONGO_URI

app.get('/', (req, res) => {
    res.send('server running')
})

const startServer = async () => {
    connectDB(url)
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

startServer()