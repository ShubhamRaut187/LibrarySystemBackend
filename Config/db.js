const mongoose = require('mongoose');

const mongodb = process.env.MONGODB || 'mongodb+srv://librarysystem187:5cjhubPMsskAyBmW@cluster0.lbi1gs6.mongodb.net/BookLibrarySystem'

const connection = mongoose.connect(mongodb);
module.exports={
    connection
}