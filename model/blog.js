var mongoose = require("mongoose");

const blogSchema  =  new mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now, 
        required : true
   }
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;