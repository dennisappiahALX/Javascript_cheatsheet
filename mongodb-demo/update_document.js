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

 // Approach First: Query first
// findById()
//Modify its properties
//save()
async function updateCourses(id){
    const course = await Course.findById(id);
    if (!course) return;
    course.ispublished = true;
    course.author = 'Another Author';
    const result = await course.save();
    console.log(result);
}


//Approach second: Update first
// Update directly from the document in the database
// Optionally : get the updated document
async function updateCourses(id){
    const result = await Course.findByIdAndUpdate(id, {
        $set: {
            author : 'New Kofi',
            ispublished : false
        }
    }, { new : true});
    console.log(result);
}

updateCourses('63513700faa10099c8dce44f');