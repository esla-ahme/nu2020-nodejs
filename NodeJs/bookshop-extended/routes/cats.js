const express = require('express');
const Category = require('../models/Category');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   const cats = Category.find();
   cats.exec()
   .then(data=>{
       res.send(data);
   }).catch(err=>{
      res.status(400).send({message:err.message});
   });
});

router.get('/:id',(req,res)=>{
   
   const cat = Category.findOne({_id:req.params.id});
   cat.exec()
   .then(data =>{
       res.send(data)
   }).catch(err=>{
      res.status(404).send({message:err.message});
   });
})



router.post('/',(req,res)=>{
   const cat = new Category({
       title:req.body.title,
       parentcategory:req.body.parentcategory
   });
   cat.save()
   .then(data => {
       res.send(data);
   })
   .catch(err=>{
       res.status(400).send({message:err.message});
   })
   
});
router.delete('/:id',(req,res)=>{
   Category.deleteOne({_id:req.params.id})
   .exec()
   .then(result => {
          res.send(result);
   })
   .catch(err => {
      res.status(404).send({message:err.message});
   });
})

router.patch('/:id',(req,res)=>{

   Category.updateOne({ _id: req.params.id },{ $set:req.body})
   .exec()
   .then(result => {
       res.send(result);  
   })
   .catch(err => {
      res.status(400).send({message:err.message});
   });
})


module.exports = router;