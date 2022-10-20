const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongo...!'))
    .catch(err => console.error('Could not connect', err));

// Schema
const courseSchema = new  mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type: Date, default: Date.now},
    ispublished : Boolean
});
    
// Model - Course document
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author : 'Dennis',
        tags : ['angular', 'frontend'],
        ispublished : true
    });
    
    const result = await course.save();
    console.log(result);
}

async function getCoursesCount(){
    const pageNumber = 2;
    const pageSize = 10;
    //api/courses?pageNumber=2&pageSize=10

    const courses = await Course
    .find({ author : 'Dennis' , ispublished : true})
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name : 1})
    .count();
    console.log(courses);
}

getCoursesCount();