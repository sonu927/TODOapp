
//getting task model
const Task = require('../models/task');

//controller for home page
module.exports.home = async function(req,res){
    let tasks = await Task.find({});
    
    return res.render('home',{
        title: "TODO App",
        tasks: tasks
    });
}

//controller for creating a task
module.exports.create = async function(req,res){

    const t = await Task.create({
        description: req.body.description,
        date: req.body.dueDate,
        category: req.body.category
    });
    
    return res.redirect('back');
}

//controller for deleting tasks
module.exports.delete = async function(req,res){
    //get id from url
    let id = req.query.id;

    //find and delete the task from database
    let del = await Task.findByIdAndDelete(id);
    return res.redirect('back');
}