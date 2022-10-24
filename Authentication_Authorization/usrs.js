// apis to manage the following endpoints
// /api/genres
// /api/rentals
// /api/customers/
// /api/movies

//Authentication- identifying users to be who the claim they are
//Authorization - determing if users have the right permissions to perform operations on the app endpoints
//we want to make sure only admin user can delete data

//Todos
// 1. Register users - POST /api/users  { name, email, password}
// 2. Login request - POST /api/logins  { }

const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : { 
         type : String, 
         required : true, 
         minlength : 5 ,
         maxlength : 50},

    email : {
        type : String,
        unique : true,
        required: true,
        minlength : 5 , 
        maxlength : 255
    },

    password : { 
        type : String, 
        required : true, 
        minlength : 5 , 
        maxlength : 1024},

    isAdmin : {
        type : Boolean
    },
    role : [],
    operations : []  //this users can delete genres or perform an operation
})

userSchema.methods.generateAuthToken = function () {
     const token = jwt.sign({ _id: this._id, isAdmin : this.isAdmin}, config.get('jwtPrivatekey'));
     return token;
}

const User = mongoose.model('User', userSchema);


function validateUser(user){
    const schema = Joi.object({ 
        name: Joi.string().min(5).max(50).required(),
        email : Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        isAdmin : Joi.boolean()
        });
    
    return schema.validate(user);
}


exports.User = User;
exports.validate = validateUser;

