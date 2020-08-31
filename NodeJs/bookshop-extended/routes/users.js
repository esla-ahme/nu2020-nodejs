const express = require('express');
const User = require('../models/User');
const Joi = require('joi');

const router = express.Router();
//Routes
router.use(express.json());

router.get('/',(req,res)=>{
   const users = User.find();
   users.exec()
   .then(data=>{
       res.send(data);
   }).catch(err=>{
      res.status(400).send({message:err.message});
   });
});

router.get('/:id',(req,res)=>{
   
   const user = User.findOne({_id:req.params.id});
   user.exec()
   .then(data =>{
       res.send(data)
   }).catch(err=>{
      res.status(404).send({message:err.message});
   });
})



router.post('/',(req,res)=>{
   

   const schema = Joi.object({
      username: Joi.string()
          .alphanum()
          .min(3)
          .max(30)
          .required(),
      email:Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow:false } }),
      password:Joi.string().min(6).max(12)
    });
    const result = schema.validate(req.body);
    if(result.error){
       return res.status(400).send("parameter name is missing or invalid"+{message:result.error});
    }
    const user = new User({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
  });
   user.save()
   .then(data => {
       res.send(data);
   })
   .catch(err=>{
       res.status(400).send({message:err.message});
   })
   
});
router.delete('/:id',(req,res)=>{
   User.deleteOne({_id:req.params.id})
   .exec()
   .then(result => {
          res.send(result);
   })
   .catch(err => {
      res.status(404).send({message:err.message});
   });
})

router.patch('/:id',(req,res)=>{
   const schema = Joi.object({
   username: Joi.string()
          .alphanum()
          .min(3)
          .max(30),
      email:Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow:false } }),
      password:Joi.string().min(6).max(12)
    });
    const result = schema.validate(req.body);
    if(result.error){
       return res.status(400).send("parameter name is missing or invalid"+{message:result.error});
    }

   User.updateOne({ _id: req.params.id },{ $set:req.body})
   .exec()
   .then(result => {
       res.send(result);  
   })
   .catch(err => {
      res.status(400).send({message:err.message});
   });
})


module.exports = router;