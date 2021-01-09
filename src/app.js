// import node modules
import morgan from "morgan";
import express, { json } from "express";

// import routers
import tasksRouter from "./routers/tasks.router";
import projectsRouter from "./routers/projects.router";

// initialization
const app = express();

// middlewares
app.use(json());
app.use(morgan('dev'));

// routers
app.use('/api/tasks', tasksRouter);
app.use('/api/projects', projectsRouter);

// export app module
export default app;
