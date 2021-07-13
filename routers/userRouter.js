const express = require('express')
const router = express.Router()
const userModel= require('../models/userModel')


router.get('/',(req,res)=>{
    userModel.findAll()
        .then(users=>res.send(users))
        .catch(err=>{

            console.log(err)
            res.send(err)
        })
})

router.post('/',(req,res)=>{
    userModel.findAll()
        .then(users=>res.send(users))
        .catch(err=>{

            console.log(err)
            res.send(err)
        })
})



module.exports = router
