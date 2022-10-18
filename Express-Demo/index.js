const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

let courses = [
    {id : 1, name : 'course1'},
    {id : 2, name : 'course2'},
    {id : 3, name : 'course3'}
]


// GET
app.get('/api/courses', (req,res) => {
    res.send(courses);
});

// POST
app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body);
    if (error)  return res.status(400).send(error.details[0].message);

   // create a new course object
    const course = {
        id : courses.length + 1,
        name: req.body.name 
    };
    courses.push(course);

    res.send(course);
});


// PUT 
app.put('/api/courses/:id', (req, res) => {

    const course =  courses.find( crse => crse.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found!');
    
    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name; //update name
    res.send(course); 

});

function validateCourse(course){
    const schema = Joi.object({ name: Joi.string().min(3) .required() });
    
    return schema.validate(course);
}

// DELETE
app.delete('/api/courses/:id', (req, res) => {
    const course =  courses.find( crse => crse.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found!');
    
    const index = courses.indexOf(course);  //delete
    courses.splice(index, 1);

    res.send(course);

});

// GET by id
app.get('/api/courses/:id', (req, res) => {
    const course =  courses.find( crse => crse.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found!');
    res.send(course);

 });

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));


