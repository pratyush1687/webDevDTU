const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const port = process.env.PORT||5000;
const app = express();
const train = require('./routes/trainer');
const user = require('./routes/user')
const general = require('./routes/general')
//mongo connect
mongoose.connect('mongodb://new:password@ds023448.mlab.com:23448/webdevpratyush')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/trainer',train);
app.use('/user',user);
app.use('/general',general);

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})