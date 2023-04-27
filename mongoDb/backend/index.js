import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
// import bodyParser from 'body-parser'

import postRoutes from './routes.js'

const PORT = process.env.PORT || 5000
const app=express();

// app.use(bodyParser.json({limit:"30mb", extended:true}))
// app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))

app.use(express.json());
app.use(cors());

const dbname = "temporary_db";
const CONNECTION_URL = `mongodb://0.0.0.0:27017/${dbname}`;

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT,()=>console.log("connected to database mongoose")))
.catch((error)=>console.log(error.message));

app.use('/', postRoutes);

