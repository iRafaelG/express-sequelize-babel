// import node modules
import { Router } from "express";

// import controllers
import { getTask, getTasks, createTask, updateTask, deleteTask, getTasksByProject } from "../controllers/tasks.controller";

// initializations
const router = Router();

// routes /api/tasks
router.get('/', getTasks);
router.post('/', createTask);

// routes /api/tasks/:taskID
router.get('/:taskID', getTask);
router.put('/:taskID', updateTask);
router.delete('/:taskID', deleteTask);

// routes /api/tasks/project/:projectID
router.get('/project/:projectID', getTasksByProject);

// export router module
export default router;