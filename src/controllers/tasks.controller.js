// import models and schemas
import Tasks from "../models/tasks.model";

// functions handlers
export async function getTask(req, res) {

    const taskID = req.params.taskID;
    
    try {

        const task = await Tasks.findOne({
            where: {
                id: taskID
            }
        });

        if(task) {

            res.status(200).json({
                data: task,
                message: "Ok"
            });

        } else {

             res.status(404).json({
                 data: {},
                 message: "Task not found"
             });

        }
        
    } catch (error) {

        res.status(500).json({
            data: {},
            error: error,
            message: "Something goes wrong..."
        });
        
    }

}

export async function getTasks(req, res) {
    
    try {

        const tasks = await Tasks.findAll();

        if(tasks.length > 0) {

            res.status(200).json({
                data: tasks,
                message: "Ok"
            });

        } else {

            res.status(404).json({
                data: {},
                message: "Tasks not founds"
            });

        }
        
    } catch (error) {

        res.status(500).json({
            data: {},
            error: error.name,
            message: "Something goes wrong..."
        });
        
    }

}

export async function getTasksByProject(req, res) {

    const projectID = req.params.projectID;
    
    try {

        const tasks = await Tasks.findAll({
            where: {
                project_id: projectID
            }
        });

        if(tasks.length > 0) {

            res.status(200).json({
                data: tasks,
                message: "Ok"
            });

        } else {

            res.status(404).json({
                data: {},
                message: "Tasks not founds"
            });

        }
        
    } catch (error) {

        res.status(500).json({
            data: {},
            error: error.name,
            message: "Something goes wrong..."
        });
        
    }
    
}

export async function createTask(req, res) {

    const { name, status, project_id } = req.body;
    
    try {

        const newTasks = await Tasks.create({
            name,
            status,
            project_id
        }, {
            fields: ['name', 'status', 'project_id']    
        });

        if(newTasks) {

            res.status(201).json({
                data: newTasks,
                message: "Task created successfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The task could not be created"
            });

        }
        
    } catch (error) {

        res.status(500).json({
            data: {},
            error: error.name,
            message: "Something goes wrong..."
        });
        
    }

}

export async function updateTask(req, res) {

    const taskID = req.params.taskID;
    const { name, status, project_id } = req.body;
    
    try {

        const updatedRowsCount = await Tasks.update({
            name,
            status,
            project_id
        }, {
            where: {
                id: taskID
            }
        });

        if(updatedRowsCount[0] > 0) {

            res.status(202).json({
                data: {},
                message: "Task updated succesfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The task could not be updated"
            });

        }
        
    } catch (error) {

        res.status(500).json({
            data: {},
            error: error,
            message: "Something goes wrong..."
        });
        
    }

}

export async function deleteTask(req, res) {

    const taskID = req.params.taskID;
    
    try {
        
        const deletedRowsCount = await Tasks.destroy({
            where: {
                id: taskID
            }
        });

        if(deletedRowsCount > 0) {

            res.status(202).json({
                data: {},
                message: "Task removed succesfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The task could not be removed"
            });

        }

    } catch (error) {

        res.status(500).json({
            data: {},
            error: error.name,
            message: "Something goes wrong..."
        });
        
    }

}