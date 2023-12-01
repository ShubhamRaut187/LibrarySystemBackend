const {Router} = require('express');
const {BookModel} = require('../Model/Book.model');

const bookRouter = Router();

bookRouter.get('/',async(req,res)=>{
    const books = await BookModel.find({});
    res.status(200).send({
        "Books":books
    });
});

bookRouter.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try {
        const book = await BookModel.find({_id:id});
        res.status(200).send({"Books":book});    
    } catch (error) {
        res.status(404).send({"Message":"Error while getting book"})
    }
    
})

bookRouter.post('/createbook',async(req,res)=>{
    let {Title,Category,Author,Year,Language} = req.body;
    if(!Title || !Category || !Author || !Year || !Language){
        res.status(400).send({"Message":"Bad Request"})
    }
    else{
        const new_book = new BookModel({
            Title,
            Category,
            Author,
            Year,
            Language
        });
        await new_book.save();
        res.status(200).send({"Message":"Book added successfully!"}) 
    }
   
})

bookRouter.put('/updatebook/:id',async(req,res)=>{
    let {id} = req.params;
    try {
        let update = req.body;
        let UpdatedData = await BookModel.findOneAndReplace({_id:id},update,{new:true});
        res.status(200).send({"Message":"Book updated successfully!","Book":UpdatedData});
    } catch (error) {
        console.log(error);
        res.status(500).send({"Message":"Failed to update book"});
    }
})

bookRouter.delete('/deletebook/:id',async(req,res)=>{
    let {id} = req.params;
    try {
        let DeletedBook = await BookModel.findOneAndDelete({_id:id});
        res.status(200).send({"Mesaage":"Book deleted successfully!","Book":DeletedBook});
    } catch (error) {
        res.status(500).send({"Message":"Error while deleting book!"})
    }
})

module.exports = {
    bookRouter
}