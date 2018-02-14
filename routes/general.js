const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Trainer = require('../models/trainer');

router.post('/allot',(req,res)=>{
    console.log(req.body);
    
    Trainer.findById(req.body.trainId,(err,foundTrainer)=>{
        if(err){throw err}
        // console.log(foundTrainer);
        
        User.findById(req.body.userId,(err,foundUser)=>{
            if(err){throw err;}
            // console.log(foundUser);
            if(!foundUser.trainerAlloted){
                flag = 1;
                for(let i=0;i<foundTrainer.usersAlloted.length;i++){
                    if(foundTrainer.usersAlloted[i]==foundUser.id){
                        res.send('user already alloted to trainer');
                        flag = 0;
                    }
                }
                if(flag == 1){
                    foundTrainer.usersAlloted.push(foundUser.id);
                    foundUser.trainerAlloted = foundTrainer.id;
                    foundTrainer.save((err,data1)=>{
                        if(err)throw err;
                        foundUser.save((err,data2)=>{
                            if(err)throw err;
                            // console.log(data1+data2);
                            res.send('added')
                        })
                    })
                }
            }
            else{
                res.send('trainer already alloted to given user');
            }
        })
    })
})

module.exports = router