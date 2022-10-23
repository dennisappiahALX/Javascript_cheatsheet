const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to Mongo...!'))
    .catch(err => console.error('Could not connect', err));


const authorSchema =   new mongoose.Schema({
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
        required : true,  
        minlength : 5 ,
        maxlength : 255 
    }
} 
) 

const Author = mongoose.model('Author', authorSchema);

//Adding a sub-document
// const Course = mongoose.model('Course', new mongoose.Schema({
//     name : { type : String, required : true },
//     author : {
//        type: authorSchema,
//        required : true
//     },
//     tags : {
//         type : Array,
//         validate : {
//             validator : function(v) {   
//                 return new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         const result = v && v.length > 0;
//                         resolve(result);
//                     }, 2000);
//                 })      
//             },
//             message : 'A course should have at le ast one tag'
//         }
//     },
//     categories : {
//         type : String,
//         required : true,
//         enum : [ 'web', 'networking', 'software dev'],
//         lowercase : true,
//         trim : true
//     },
//     date : {
//         type : Date,
//         default : Date.now()
//     },

//     isPublished : Boolean,

//     price : {
//         type : Number,
//         required : function() { return this.isPublished;}, //required only if it is published
//         min : 10,
//         max : 200,
//         get : v => Math.round(v),
//         set : v => Math.round(v),
//     }
// }));



//Adding an array of sub-document
const Course = mongoose.model('Course', new mongoose.Schema({
    name : { type : String, required : true },
    authors : {
       type: [authorSchema],
       required : true
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
            message : 'A course should have at le ast one tag'
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



async function createCourse(name, authors, tags, categories, date, isPublished, price, ) {
    const course = new Course({
        name,
        authors,
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


async function addAuthor(courseId, author) {
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = await course.authors.id(authorId);
    author.remove();
    course.save();
}

addAuthor('63548ad76e8fccf615818e90', 
new Author({name : 'Appiah', bio : 'Software enginer...', website: 'https//' }))


// createCourse('Node JS', [
//     new Author({name : 'Dennis', bio : 'Software enginer...', website: 'https//' }),
//     new Author({name : 'Kwabena', bio : 'Data Engineer...', website: 'https//' }),
//     new Author({name : 'Junior', bio : 'Data Scientist...', website: 'https//' })
// ], ['Node JS', 'Backend'], 'web','2022-10-22', false, 17.68);

// async function updateCourse(id){
//     const course = await Course.findById(id);
//     if (!course) return;
//     course.author.name = 'Kofi Kwabena'
//     const result = await course.save();
//     console.log(result);
// }