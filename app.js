/*
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());


const courses=[
    {id:1, name: "course1"},
    {id:2, name: "course2"},
    {id:3, name: "course3"},
]

app.get('/',(req, res) => {
    res.send("hello world");
});

app.post('/api/courses', (req,res)=>{
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body,schema);
    console.log(result);

    if(!req.body.name || req.body.name.length<3){
        // 400 
        res.status(400).send("Name too short");
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    course.push(course);
    res.send(course);
});


app.get('/api/courses/:id',(req,res) => {
    const course = courses.find(c=>c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("course with that id not found");
    res.send(course);
});

// PORT
const port = process.env.PORT||3000;

app.listen(3000, () => console.log(`listening on ${port}`));
*/