const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()) //deal with json requests


let books = [
    {isbn:1234,title:"A Song of Ice and Fire",publisher:"Pub 1"},
    {isbn:1233,title:"This Blinding Absense of Light",publisher:"Pub 2"},
    {isbn:1232,title:"Wonder",publisher:"Pub 2"},
    {isbn:1231,title:"The Raven (poet)",publisher:"Pub 3"}
];
app.get('/api/books',(req,res) => {
    res.send(books);
});

app.get('/api/books/:isbn',(req,res)=>
{
    let isbn =parseInt(req.params.isbn);
    const book = books.find(b => b.isbn === isbn);
    if(!book) return res.status(404).send("The book with the given isbn not found");
    res.send(book)
});

app.post('/api/books',(req,res)=>
{
    const book = {
        isbn: books[books.length-1].isbn-1,
        title: req.body.title,
        publisher: req.body.publisher
    }
    books.push(book);
    res.send(book);
});

app.put('/api/books/:isbn',(req,res)=>
{
    let isbn =parseInt(req.params.isbn);
    const book = books.find(b => b.isbn === isbn);
    if(!book) return res.status(404).send("The book with the given isbn not found");
    book.title = req.body.title;
    book.publisher =  req.body.publisher;
    res.send(book)
});

app.delete('/api/books/:isbn',(req,res)=>{
    let isbn =parseInt(req.params.isbn);
    const book = books.find(b => b.isbn === isbn);
    if(!book) return res.status(404).send("The book with the given isbn not found");
    const index = books.indexOf(book); // generally id is not same as index 
    books.splice(index,1);
    res.send(book);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });