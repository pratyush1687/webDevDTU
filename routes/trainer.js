const router = require('express').Router();
const passport = require('passport');
const trainer = require('../models/trainer');
const jwt = require('jsonwebtoken');

router.get('/',(req,res)=>{
    trainer.find({},(err,data)=>{
        if(err){
            throw err
        }
        else{
            // console.log(data);
            res.send(data);
            
        }
    })
})


router.post('/login',(req,res)=>{
    // trainerDetails = req.body;
    // newTrainer  = new trainer(trainerDetails);
    console.log('in lgoin');
    username= req.body.username;
    
    trainer.findById(username,(err,data)=>{
        if(err) throw err;
        console.log(req.body.password);
        console.log(data);
        
        
        if(req.body.password==data.password){
            jwt.sign({user:data},'secret key',{expiresIn:10800},(err,token)=>{
                if(err) throw err;
                console.log('hello');
                
                res.send(
                    token
                )
            }) 
        }
        else{
            res.send('koi na')
        }
    })
})

router.post('/addTrainer',(req,res)=>{
    trainerDetails = req.body;
    newTrainer  = new trainer(trainerDetails);
    newTrainer.save(function(err,data){
        // console.log(data);
        res.send(data);
    });  

})
router.get('/updateTrainer',verifyToken,(req,res)=>{
    res.redirect('../edit.html')
})

router.post('/updateTrainer',verifyToken,(req,res)=>{
    updatedDetails = req.body;
    trainer.findOneAndUpdate({username:req.body.username},
        updatedDetails,(err,FoundTrainer)=>{
        // console.log(FoundTrainer);
        if(err) throw err;
        res.send('updated');
    })
})

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }  
}
module.exports = router;