const mongoose = require('mongoose');
var workoutSchema = new mongoose.Schema({
    caloriesBurnt:String,
    description:String,
    time:String,
    exercises:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'exercise'
        }
    ]
})

module.exports = mongoose.model('workout',workoutSchema);