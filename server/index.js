import express from 'express'
import 'dotenv/config'

import './db/client.js'
import router from './routes/recipes.js'
//defining the port
const port = process.env.PORT || 5002

const app = express()
//built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body. Without this, req.body would be undefined.
app.use(express.json())

//appending the users route
app.use('/recipes', router)

//creating the initial route
app.get('/', (req, res) => {
	console.log('Home Page')
	res.send('Connecting your MongoDB database with mongoose!')
})
//listen to port
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
