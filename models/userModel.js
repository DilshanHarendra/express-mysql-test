const sequelize = require('sequelize')
const db =  require('../config/databaseConnection')

    const users = db.define("users", {
        id:{
          type:sequelize.INTEGER,
          primaryKey:true,
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
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    });

 users.sync().then(()=>{
     console.log(`user table created`)
 })
module.exports=users

