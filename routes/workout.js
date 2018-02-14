const express = require('express');
const router  = express.Router();
var workoutModel = require('../models/workout')


router.get('/allRoutines',(req,res)=>{
    workoutModel.find({}).populate('excercise').exec((err,data)=>{
        if(err) throw err;
        else
            res.send(data);
    })
})

router.post('/addRoutine',(req,res)=>{
    routineDeatails = req.body
    newRoutine = new workoutModel(routineDeatails);
    newRoutine.save(function(err,data){
        if(err) throw err;
        res.send(data);
    })
})
module.exports = router