import express from 'express'
import cors from 'cors'
import { db } from './model/db.js'
import userRoutes from './routes/routes.js'

const PORT = process.env.PORT || 4444
const app = express()

app.use(express.json())
app.use(cors())

app.use('/mysql', userRoutes)

// mysql connection
db.sync()
.then(()=> app.listen(PORT,()=>console.log("Database connected")))
.catch(error=> console.log("unable to connect", error.message))

