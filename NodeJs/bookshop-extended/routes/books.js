const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.use(express.json());


router.get('/',(req,res)=>{
   const books = Book.find().limit(5);
   books.exec()
   .then(data=>{
       res.send(data);
   }).catch(err=>{
      res.status(400).send({message:err.message});
   });
});

router.get('/:id',(req,res)=>{
   
   const book = Book.findOne({_id:req.params.id});
   book.exec()
   .then(data =>{
       res.send(data)
   }).catch(err=>{
      res.status(404).send({message:err.message});
   });
})



router.post('/',(req,res)=>{
   const book = new Book({
       title:req.body.title,
       isbn:req.body.isbn,
       publisher:req.body.publisher,
       price:req.body.price,
       category:req.body.category,
       year:req.body.year,
   });
   book.save()
   .then(data => {
       res.send(data);
   })
   .catch(err=>{
       res.status(400).send({message:err.message});
   })
   
});
router.delete('/:id',(req,res)=>{
   Book.deleteOne({_id:req.params.id})
   .exec()
   .then(result => {
          res.send(result);
   })
   .catch(err => {
      res.status(404).send({message:err.message});
   });
})

router.patch('/:id',(req,res)=>{

   Book.updateOne({ _id: req.params.id },{ $set:req.body})
   .exec()
   .then(result => {
       res.send(result);  
   })
   .catch(err => {
      res.status(400).send({message:err.message});
   });
})


module.exports = router;