const express = require('express');
const app = express();
const cats = require('./cats');
const birds = require('./birds');


//Middlewares
//Routes
app.use('/cats',cats);
app.use('/birds',birds);
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("hello to main");
    res.send("home")
 });

app.listen(5000);