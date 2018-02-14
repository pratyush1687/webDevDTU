const router = require('express').Router();
const passport = require('passport');
const trainer = require('../models/trainer');


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

router.post('/addTrainer',(req,res)=>{
    trainerDetails = req.body;
    newTrainer  = new trainer(trainerDetails);
    newTrainer.save(function(err,data){
        // console.log(data);
        res.send(data);
    });  

})
router.get('/updateTrainer',(req,res)=>{
    res.redirect('../edit.html')
})

router.post('/updateTrainer',(req,res)=>{
    updatedDetails = req.body;
    trainer.findOneAndUpdate({username:req.body.username},
        updatedDetails,(err,FoundTrainer)=>{
        // console.log(FoundTrainer);
        if(err) throw err;
        res.send('updated');
    })
})

module.exports = router;