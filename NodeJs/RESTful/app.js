const express = require('express');
const Joi = require ('joi');
const app = express();
const port = 5000;

app.use(express.json());
const courses = [
    {id: 1 , name : 'course 1'},
    {id: 2 , name : 'course 2'},
    {id: 3 , name : 'course 3'}
];
app.get('/', (req, res) => {
  res.send('Hello World!!!')
});

app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>
{
    let id =parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    if(!course) res.status(404).send("The course with the given id not found");
    else res.send(course)
});

app.post('/api/courses',(req,res)=>
{
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>
{
    let id =parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    if(!course) {
        res.status(404).send("The course with the given id not found");
        return;
    }
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})

app.delete('/api/courses/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    const course = courses.find(c => c.id === id);
    if(!course) res.status(404).send("The course with the given id not found");
    else {const index = courses.indexOf(course); // generally id is not same as index 
    courses.splice(index,1);
    res.send(course);}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

