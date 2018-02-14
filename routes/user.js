const router = require('express').Router();
const passport = require('passport');
const UserModel = require('../models/user');

router.get('/',(req,res)=>{
    UserModel.find({},(err,data)=>{
        if(err){
            throw err
        }
        else{
            // console.log(data);
            res.send(data);
            
        }
    })
})

router.post('/addUser',(req,res)=>{
    userDetails = req.body;
    // console.log(req.body);
    
    newUser = new UserModel(userDetails);
    newUser.save(function(err,data){
        if(err)throw err;
        // console.log(data);
        res.send(data);      
    })
})

router.post('/updateUser',(req,res)=>{
    updatedDetails = req.body;
    User.findOneAndUpdate({username:req.body.username},
        updatedDetails,(err,FoundUser)=>{
            if(err) throw err;
        // console.log(FoundUser);
        res.send({message:'updated',user:FoundUser});
    })
})

module.exports = router;