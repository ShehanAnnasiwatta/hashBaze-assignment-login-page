const express = require('express');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const colors = require('colors');
const cors = require('cors')
const connectDb = require('./config');
const PORT = process.env.PORT;

connectDb();
const app = express();
app.get('/', (req, res) => {
    res.send('Hi Shehan!!');
})

const userRouter = require('./routers/UserRouter')

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use('/api', userRouter);


mongoose.connection.on("open", () => {
    console.log(colors.cyan(('Connected to Mongo Db')));
    app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
})
