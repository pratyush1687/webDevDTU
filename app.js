const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT||5000;

express.use(bodyParser.json());
express.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})