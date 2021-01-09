// import models or schemas
import Projects from "../models/projects.model";

// functions handlers
export async function getProject(req, res) {
    
    const projectID = req.params.projectID;

    try {

        const project = await Projects.findOne({
            where: {
                id: projectID
            }
        });

        if(project) {

            res.status(200).json({
                data: project,
                message: "Ok"
            });

        } else {

            res.status(404).json({
                data: {},
                message: "Project not found"
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

export async function getProjects(req, res) {
    
    try {

        const projects = await Projects.findAll();

        if (projects.length > 0) {

            res.status(200).json({
                message: "Ok",
                data: projects
            });

        } else {

            res.status(404).json({
                data: {},
                message: "Projects not founds"
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

export async function createProject(req, res) {

    const { name, priority, description, delivery_date } = req.body;

    try {

        const newProject = await Projects.create({
            name,
            priority,
            description,
            delivery_date
        }, {
            fields: ['name', 'priority', 'description', 'delivery_date']
        });
    
        if(newProject) {

            res.status(201).json({
                data: newProject,
                message: "Project created succesfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The project could not be created"
            });

        }

    } catch (error) {

        res.status(500).json({
            data: {},
            error: error.name,
            message: "Something goes wrong...",
        });

    }

}

export async function updateProject(req, res) {

    const projectID = req.params.projectID;
    const { name, priority, description, delivery_date } = req.body;
    
    try {
        
        const projects = await Projects.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'delivery_date'],
            where: {
                id: projectID
            }
        });

        if(projects.length > 0) {

            for (const project of projects) {
                
                await project.update({
                    name,
                    priority,
                    description,
                    delivery_date
                });

            }

            res.status(202).json({
                data: {},
                message: "Project updated successfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The project could not be updated"
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

export async function deleteProject(req, res) {

    const projectID = req.params.projectID;
    
    try {

        const deletedRowsCount = await Projects.destroy({
            where: {
                id: projectID
            }
        });

        if(deletedRowsCount > 0) {

            res.status(202).json({
                data: {},
                message: "Project removed succesfully!"
            });

        } else {

            res.status(400).json({
                data: {},
                message: "The project could not be removed"
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