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
    //and or 
    // find courses that are published by Dennis or is pusblished
    const courses = await Course
    .find()
    .or([{ author : 'Dennis'}, { ispublished : true}])  
    .limit(10)
    .sort({ name : 1})
    .select({ name: 1, tags : 1});
    console.log(courses);
}

getCourses();