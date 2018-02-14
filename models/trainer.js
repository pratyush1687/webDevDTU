const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var trainerSchema = new mongoose.Schema({
    username: String,
    password: String,
    description:String,
    imgUrl:String,
    name: String,
    type:{type:String,default:'trainer'},
    experience: String,
    phoneNumber: String,
    address: String,
    usersAlloted: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    callLog: [
        {
            dateTime: String,
            notes:String,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    ScheduledCalls:[
        {
            dateTime:String,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        }
    ]

})
trainerSchema.plugin(passportLocalMongoose);

module.exports= mongoose.model('trainer',trainerSchema);