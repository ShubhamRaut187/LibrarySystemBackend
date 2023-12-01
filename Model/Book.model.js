const mongoose = require('mongoose');

const bookscheme = mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Year:{
        type:Number,
        required:true
    },
    Language:{
        type:String,
        required:true
    }
});

const BookModel = mongoose.model('books',bookscheme);

module.exports={
    BookModel
}