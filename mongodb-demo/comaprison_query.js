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

async function getCourses(){
    const courses = await Course
    // .find();   returns all courses in the database 
    // .find({ author : 'Dennis', ispublished : true })  returns all courses by Dennis and is_published is True
    // .find({ price: 10})    returns all price equal to 10
    // .find({price : {$gt : 10}})   returns all price equal to 10
    // .find({price : {$gt : 10, $lte : 20}})  returns all price between 10 and 20
    // .find({price : {$in: [10, 15, 20]}})  returns price = 10 or 15, 20
    .limit(10)
    .sort({ name : 1})
    .select({ name: 1, tags : 1});
    console.log(courses);
}