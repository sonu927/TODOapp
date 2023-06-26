const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded());

//setting database
const Task = require('./models/task');
const db = require('./config/mongoose');

//use express router
app.use('/',require('./routes'));

//using static files
app.use(express.static('assets'));

//set up ejs view
app.set('view engine','ejs');
app.set('views','./views');

//server to listen on port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})