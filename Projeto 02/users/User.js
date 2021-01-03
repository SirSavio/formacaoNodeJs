const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    email: { 
        type: Sequelize.STRING,
        allowNUll: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync({force: false})

module.exports = User