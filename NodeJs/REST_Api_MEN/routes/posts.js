const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
//Routes
router.use(express.json());



router.get('/',(req,res)=>{
    const posts = Post.find().limit(5);
    posts.exec()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(404).send({message:err});
    });
});

router.get('/:id',(req,res)=>{
    
    const post = Post.findOne({_id:req.params.id});
    post.exec()
    .then(post =>{
        res.send(post)
    }).catch(err=>{
        res.status(404).send({message:err});
    });
})

router.get('/',(req,res)=>{
    const posts = Post.find().limit(5);
    posts.exec()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(404).send({message:err});
    });
});

router.post('/',(req,res)=>{
    const p = new Post({
        title: req.body.title,
        description : req.body.description
    });
    p.save()
    .then(data => {
        res.send(data);
    })
    .catch(err=>{
        res.status(404).send({message:err});
    })
    
});
router.delete('/:id',(req,res)=>{
    Post.remove({_id:req.params.id})
    .exec()
    .then(result => {
           res.send(result);
    })
    .catch(err => {
        res.status(404).send({message:err});
    });
})

router.patch('/:id',(req,res)=>{

    Post.updateOne({ _id: req.params.id },{ title : req.body.title, description : req.body.description})
    .exec()
    .then(result => {
        res.send(result);  
    })
    .catch(err => {
        res.status(404).send({message:err});
    });
})


module.exports = router;