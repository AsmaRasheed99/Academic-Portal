const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//1- Create a new schema 
const courseSchema = new Schema({
     
    title: {
        type : String,
        required : true
    },
    subject: {
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    
    description:{
        type : String,
        required : false
    },
    thumbnail:{
        type : String,
        required: true
    },
    video:{
        type : String,
        required: true   
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User' // reference to the User model
      }
    

    
    },
     {timestamp : true}
    )

    // 2- export the model with the schema
    module.exports = mongoose.model('Course',courseSchema);