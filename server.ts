import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import { QuizData } from './interfaces'

const PORT = 8000
const app = express()

app.get("/quiz-item", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get("https://750e3ff0-b3f8-4e6a-8c24-c3b814f9cd49-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/quizes/collections/quirky_quizes", {
            headers: {
                'X-Cassandra-Token': "AstraCS:oJJJqHXNzfxrJGxswaSCKUrC:8fa68a7e46cce8e278f4332ce2a7033ab8379c482b46ab65c4656eb5ed5038c3",
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data["ed1adae9-8bdb-471a-8f1e-23dbc6e64751"]
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log('server is running on:' + PORT)
})