const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title:String,
    day:Array,
    month:Array,
    year:String,
    beginTime:String,
    endTime:String,
    place:String,
    description:String,
    image:String
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;