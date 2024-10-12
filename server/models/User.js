const { Schema, model } = require('mongoose')

const user = new Schema({
    username: String,
    email: {
        type: String,
        required: ['Please enter a valid email']
    },
    password: {
        type: String,
        required: ['Please enter a password']
    }
})

const User = model('User', user);

module.exports = User;