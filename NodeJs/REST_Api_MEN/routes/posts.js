const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
//Routes
router.use(express.json());



router.get('/',(req,res)=>{
    const posts = Post.find().limit(5);
    
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


module.exports = router;