const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');


//Middlewares
//Routes
app.use('/posts',postRoute);
app.use(express.json());



//conect to db
mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true ,  useUnifiedTopology: true },
    ()=>{
        console.log("connected to db");
    })
//Listen
app.listen(3500);