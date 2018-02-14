const mongoose = require('mongoose');
var excerciseSchema = new mongoose.Schema({
    videoLink:String,
    name:String,
    description:String,
})

module.exports = mongoose.model('exercise',)