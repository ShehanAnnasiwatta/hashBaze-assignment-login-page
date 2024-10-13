const express = require('express');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./config');
const PORT = process.env.PORT;

connectDb();
const app = express();


const userRouter = require('./routers/UserRouter');
// const verifyUser = require('./middleware/auth');

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(cookieParser());
app.get('/',(req, res) => {
    res.send('Hi Shehan!!');
})
app.use('/api', userRouter);


mongoose.connection.on("open", () => {
    console.log(colors.cyan(('Connected to Mongo Db')));
    app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
})
