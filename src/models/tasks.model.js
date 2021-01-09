// import node modules
import Sequelize from "sequelize";
import { sequelize } from "../database/db.config";

// Tasks model or schema definition
const Tasks = sequelize.define('tasks', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    project_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

// export Tasks module
export default Tasks;