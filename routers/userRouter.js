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
    userModel.create(req.body).then(response=>{
        res.send(response)
    }).catch(err=>{
        const errObj = {};
        err.errors.map( er => {
            errObj[er.path] = er.message;
        })
        res.status(403).send({message:errObj})
    })


})



module.exports = router
