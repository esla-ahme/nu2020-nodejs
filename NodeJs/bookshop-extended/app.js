const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bookRoute = require('./routes/books');
const userRoute = require('./routes/users');
const pubRoute = require('./routes/pubs');
const catRoute = require('./routes/cats');


//Middlewares

app.use('/books',bookRoute);
app.use('/users',userRoute);
app.use('/pubs',pubRoute);
app.use('/cats',catRoute);
app.use(express.json());



//conect to db
mongoose.connect('mongodb://localhost:bookshop',
    { useNewUrlParser: true ,  useUnifiedTopology: true },
    ()=>{
        console.log("connected to db");
    })
//Listen
app.listen(3500);