const sequelize = require('sequelize')
const db =  require('../config/databaseConnection')

    const users = db.define("users", {
        id:{
            type:sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        name: {
            type: sequelize.STRING
        },
        email: {
            type: sequelize.STRING,
            unique:true
        },
        gender: {
            type: sequelize.BOOLEAN
        },
        age:{
            type:sequelize.INTEGER,
        },

    });

 users.sync().then(()=>{
     console.log(`user table created`)
 })
module.exports=users

