const mongoose = require('mongoose');
const courseSchema = mongoose.Schema(
    {
        name:String,
        description:String,
        price:String,
        numberHours:String,
        studentNumbers:String,
        trainer:String,
        img:String
    });
//création d'un model qui va suivre le model déja crée
const course = mongoose.model('Course',courseSchema) ;
module.exports = course;   