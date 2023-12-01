const express = require('express');
const cors = require('cors');
const app = express();
const {connection} = require('./Config/db');
const {bookRouter} = require('./Routes/books');

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).send('Welcome to home!')
})

app.use('/book',bookRouter);

app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to MongoDB on port 8000");
    } catch (error) {
        console.log("Error while connection to MongoDB");
        console.log(error);
    }
})