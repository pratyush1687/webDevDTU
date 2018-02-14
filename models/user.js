const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    type:{type:String,default:'user'},
    password: String,
    name: String,
    age:String,
    height:String,
    startWeight:String,
    currentWeight:String,
    targetWeight:String,
    phoneNumber: String,
    address:String,
    imgUrl:String,
    trainerAlloted:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainer'
    },
    workoutSchedule:[
        {
            time:String,
            workout:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'workout'
            }
        }
    ],
    ScheduledCalls:[
        {
            dateTime:String,
            trainer:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'trainer'
            }
        }
    ]

})
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user',userSchema);  