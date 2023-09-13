import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('server running')
})

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

startServer()