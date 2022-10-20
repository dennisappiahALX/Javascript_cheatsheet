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
    .find({ author : 'Dennis', ispublished : true })  //returns all courses by Dennis and is_published is True
    .find({ price: 10})    //returns all price equal to 10
    .find({price : {$gt : 10}})   //returns all price equal to 10
    .find({price : {$gt : 10, $lte : 20}})  //returns all price between 10 and 20
    .find({price : {$in: [10, 15, 20]}})  //returns price = 10 or 15, 20
    .find()
    .or([{ author : 'Dennis'}, { ispublished : true}])  // Authored by Dennis  or is pusblished
    .find({ispublished : true, tags: {$in : ['backend', 'frontend']} }) //Get all published frontend or backend
    .find({ispublished : true})  //get all published courses frontend and backend courses
    .and([{ tags : 'backend'}, { tags : 'froentend'}])
    .find({ author : /^Mosh/}) //query where author starts with Mosh
    .find({ author : /Dennis$/i})   // Ends with Dennis (case insentive)
    .find({ author : /.*Dennis.*/i})  // contains Dennis
    .find({ispublished : true})
    .or([{price : {$gt : 15}}, {name : /.*by.*/i}])   //published courses that are 15dollars or more or has name by 
    .limit(10)
    .sort({ name : 1})
    // .count()
    .select({ name: 1, tags : 1});
    console.log(courses);
}


async function getCoursesPaginate(){
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