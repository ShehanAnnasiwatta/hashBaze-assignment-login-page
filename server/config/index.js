const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log(colors.red((error.message)));
    }    
}

module.exports = connectDb;