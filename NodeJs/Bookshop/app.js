const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()) //deal with json requests

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:bookshop',
    { useNewUrlParser: true ,  useUnifiedTopology: true },
    ()=>{
        console.log("connected to db");
    })

    const PostSchema = mongoose.Schema({
        title:{
            type:  String,
            required: true
        },
        description: {
            type:  String,
            required: true
        },
        date:{
            type:  Date,
            default: Date.now
        }
    })
    const Post = mongoose.model('Posts',PostSchema)

app.get('/api/books',(req,res) => {
    const posts = Post.find().limit(5);
    posts.exec()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(404).send({message:err});
    });
});

app.get('/api/books/:id',(req,res)=>
{
    const post = Post.findOne({_id:req.params.id});
    post.exec()
    .then(post =>{
        res.send(post)
    }).catch(err=>{
        res.status(404).send({message:err});
    });
});

app.post('/api/books',(req,res)=>
{
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

app.put('/api/books/:id',(req,res)=>
{
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

app.delete('/api/books/:id',(req,res)=>{
    Post.remove({_id:req.params.id})
    .exec()
    .then(result => {
           res.send(result);
    })
    .catch(err => {
        res.status(404).send({message:err});
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });