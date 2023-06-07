import express from 'express'
import mongoose from 'mongoose'
import Connection from './Database/DB.js'
import router from './Route/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const Port = 4000

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({origin: 'http://webFast.onrender.com'}));
app.use('/' , router)

//"mongodb+srv://muqadus:12345@cluster0.77er7ma.mongodb.net/"
//Connection()
//try {
  mongoose.connect("mongodb+srv://shaf:shafiq@cluster0.rbvea9m.mongodb.net/test", { useUnifiedTopology: true, useNewUrlParser: true })
     console.log("DB CONNECTED")
 //}
 //catch(error) {
     //console.log(error)
 //}


app.listen(Port, () => {
  console.log("Server is running")
})

