import express from 'express'
import cors from 'cors'
import connect from './database/db'
import router from './routes/routes'

// Connect to the database.
connect()

// Make an express app.
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('This is the home page.')
})

app.use('/api', router)

app.listen(5000, () => {
  console.log('Server listening on port 5000.')
})