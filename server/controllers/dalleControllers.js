import { OpenAI } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.API_KEY })

export const generateImage = async (req, res) => {
    try {
        const { prompt } = req.body

        const response = await openai.images.generate({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        })

        const image = response.data[0].url
        res.status(200).json({ photo: image })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}