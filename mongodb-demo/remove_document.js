const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongo...!'))
    .catch(err => console.error('Could not connect', err));

const courseSchema = new  mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type: Date, default: Date.now},
    ispublished : Boolean
});
    
const Course = mongoose.model('Course', courseSchema);


async function removeCourses(id){
    const course = await Course.deleteOne({ _id:id});
    console.log(course);
  ;
}

removeCourses('63513700faa10099c8dce44f');