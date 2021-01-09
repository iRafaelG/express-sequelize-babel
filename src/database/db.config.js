// import node modules
import Sequelize from "sequelize";

// Database string connection and configuration (database, user, password and option object)
export const sequelize = new Sequelize('postgres', 'postgres', 'password',
 {
    logging: false,
    host: 'localhost',
    dialect: 'postgres',
    pool: { min: 0, max: 5, require: 30000, idle: 10000 }
 }
);