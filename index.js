const express = require('express')
const app = express()
const userRoute = require('./routers/userRouter')


app.use('/api/v1/user',userRoute)


app.listen(8000,()=>console.log("run on 8000"))
