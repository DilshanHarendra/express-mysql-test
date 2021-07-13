const dotenv = require('dotenv');
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoute = require('./routers/userRouter')
const db= require('./config/databaseConnection')


//
app.use(cors({origin:'http://localhost:8080'}))




// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error( err))


//routers
app.use('/api/v1/user',userRoute)


app.listen(8000,()=>console.log("run on 8000"))
