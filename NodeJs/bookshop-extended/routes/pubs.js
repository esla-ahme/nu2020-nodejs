const express = require('express');
const Publisher = require('../models/Publisher');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   const pubs = Publisher.find();
   pubs.exec()
   .then(data=>{
       res.send(data);
   }).catch(err=>{
      res.status(400).send({message:err.message});
   });
});

router.get('/:id',(req,res)=>{
   
   const pub = Publisher.findOne({_id:req.params.id});
   pub.exec()
   .then(data =>{
       res.send(data)
   }).catch(err=>{
      res.status(404).send({message:err.message});
   });
})



router.post('/',(req,res)=>{
   const pub = new Publisher({
       name:req.body.name,
       email:req.body.email,
       address:req.body.address
   });
   pub.save()
   .then(data => {
       res.send(data);
   })
   .catch(err=>{
       res.status(400).send({message:err.message});
   })
   
});
router.delete('/:id',(req,res)=>{
   Publisher.deleteOne({_id:req.params.id})
   .exec()
   .then(result => {
          res.send(result);
   })
   .catch(err => {
      res.status(404).send({message:err.message});
   });
})

router.patch('/:id',(req,res)=>{

   Publisher.updateOne({ _id: req.params.id },{ $set:req.body})
   .exec()
   .then(result => {
       res.send(result);  
   })
   .catch(err => {
      res.status(400).send({message:err.message});
   });
})


module.exports = router;