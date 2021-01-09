// import node module
import Sequelize from "sequelize";
import { sequelize } from "../database/db.config";

// import models or schemas
import Tasks from "./tasks.model";

// Projects model or schema definition
const Projects = sequelize.define('projects', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    delivery_date: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

// relationships definition
Projects.hasMany(Tasks, {
    sourceKey: 'id',
    foreignKey: 'project_id'
});

Tasks.belongsTo(Projects, {
    sourceKey: 'id',
    foreignKey: 'project_id'
});

// export Projects module
export default Projects;