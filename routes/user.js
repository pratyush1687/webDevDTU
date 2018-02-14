const router = require('express').Router();
const passport = require('passport');
const UserModel = require('../models/user');

router.get('/',(req,res)=>{
    UserModel.find({}).populate('trainerAlloted').exec((err,data)=>{
        if(err){
            throw err
        }
        else{
            // console.log(data);
            // data[0].populate('trainer').exec(function(err,user){
            res.send(data);

            // });
            
        }
    })
})

router.get('/showUsers',function(req,res){
    res.redirect('../user.html')
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
});

router.post('/signup', function(req, res){
    console.log(req.body);
    
});

module.exports = router;