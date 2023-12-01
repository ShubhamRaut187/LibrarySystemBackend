const mongoose = require('mongoose');

const mongodb = process.env.MONGODB;

const connection = mongoose.connect(mongodb);
module.exports={
    connection
}