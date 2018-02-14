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
const UserModel = require('./models/user')
//mongo connect
mongoose.connect('mongodb://new:password@ds023448.mlab.com:23448/webdevpratyush')


app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
// app.use(flash());



// app.use(require('express-session')({
//     secret: 'dtu hackathon',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash('error');
//     res.locals.success = req.flash('success');
//     next();
// });

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(UserModel.authenticate()));
// passport.serializeUser(UserModel.serializeUser());
// passport.deserializeUser(UserModel.deserializeUser());


app.use('/trainer',train);
app.use('/user',user);
app.use('/general',general);

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})