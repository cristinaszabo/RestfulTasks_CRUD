// Add the ROUTES: 
// route file require controllers

const tasks = require("../controllers/tasks"); // the 2 files(routes.js and tasks.js) are in dif folders

module.exports = function(app){
    // 1. GET: Retrieve all Tasks
    app.get("/tasks", function(req, res){
        tasks.all_tasks(req, res);
    });

    // 2. GET: Retrieve a Task by ID
    app.get("/tasks/:id", function(req, res){
        console.log('iiiiiii', req.params.id)
        tasks.one_task(req, res);
    });

    // 3. POST: Create a Task
    app.post("/tasks", function(req, res){
        tasks.create_task(req, res);
    });

    // 4. PUT: Update a Task by ID
    app.put('/tasks/:id', function(req,res){
        tasks.update_task(req, res);
    });

    // 5. DELETE: Delete a Task by ID
    app.delete('/tasks/:id', function(req,res){
        tasks.delete_task(req, res);
    });
}