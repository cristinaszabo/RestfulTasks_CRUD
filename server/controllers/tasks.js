// add the LOGIC (CODE)
// this file(controller file) requires MODELS)

const mongoose = require('mongoose');
var Task = mongoose.model("Task"); // We are retrieving this Schema from our Models, named 'task'

module.exports = {
    all_tasks: function(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "Success! Here is the tasks DB:", all_tasks: tasks});
            }
        });
    },

    one_task: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err){
                res.json({message: "This task doesn't exist in our db!", error: err});
            }
            else {
                res.json({message: "Success! Here is one:", one_task: task});
            }
        });
    },


    create_task: function(req, res){
        Task.create(req.body, function(err, data){
            if(err){
                res.json({message: "We have an error!", error: err});
            }
            else{
                res.json({message: "Successfully added a task!", data}); 
            };
        });
    },

    update_task: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task){
            task.title = req.body.title;
            task.description = req.body.description;
            task.completed= req.body.completed;
            task.save(function(err){
                if(err){
                    res.json({message: "We have an error!", error: err});
                }
                else{
                    res.json({message: "Successfully updated a task!", one_task : task}); 
                }
            });
        });
    },

    delete_task: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task){
            if(task === null){
                res.json({message:"This task doesn't exist in our db!", one_task: task})
            }
            else {
                Task.remove({_id: req.params.id}, function(err, task){
                    res.json({message: "Succes! U removed a task!"});
                });
            }  
        });
    }
}
