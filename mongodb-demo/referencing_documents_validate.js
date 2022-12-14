const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongo...!'))
    .catch(err => console.error('Could not connect', err));


const Author = mongoose.model('Author', new mongoose.Schema({   //author is a subset or part of the Course object
    name : { 
        type : String, 
        required : true,
        minlength : 5 ,
        maxlength : 255
    },
    bio : { 
        type : String, 
        minlength : 5,
        maxlength : 255
    },
    website : { 
        type : String, 
        required : true,  //required if bio is given
        minlength : 5 ,
        maxlength : 255 
    }
}));

const Course = mongoose.model('Course', new mongoose.Schema({
    name : { type : String, required : true },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    }, 
    tags : {
        type : Array,
        validate : {
            validator : function(v) {   
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const result = v && v.length > 0;
                        resolve(result);
                    }, 2000);
                })      
            },
            message : 'A course should have at least one tag'
        }
    },
    categories : {
        type : String,
        required : true,
        enum : [ 'web', 'networking', 'software dev'],
        lowercase : true,
        trim : true
    },
    date : {
        type : Date,
        default : Date.now()
    },

    isPublished : Boolean,

    price : {
        type : Number,
        required : function() { return this.isPublished;}, //required only if it is published
        min : 10,
        max : 200,
        get : v => Math.round(v),
        set : v => Math.round(v),
    }
}));

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });

    try{
        const result = await author.save();
         console.log(result);
    }
    catch (err) {
        for (field in err.errors) {
            console.log(err.errors[field].message);
        }
    }
    
}

async function createCourse(name, author, tags, categories, date, isPublished, price, ) {
    const course = new Course({
        name,
        author,
        tags,
        categories,
        date,
        isPublished,
        price
    });

    try{
        const result = await course.save();
        console.log(result);
    }
    catch (err) {
        for (field in err.errors) {
            console.log(err.errors[field].message);
        }
    }
    
}

async function listCourses() {
    const courses = await Course
    .find()
    .populate('author', 'name -_id')
    .select('name author');

    console.log(courses);
}

// listCourses();
// createAuthor('Dennis', 'Software Engineer', 'https://');

createCourse('Node JS', '63544461079388b382775cf8', ['Node JS', 'Backend'], 'web','2022-10-22', false, 17.68);
