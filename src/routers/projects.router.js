// import node modules
import { Router } from "express";

// import controllers
import { getProject, getProjects, createProject, updateProject, deleteProject } from "../controllers/projects.controller";

// initializations
const router = Router();

// routes /api/projects
router.get('/', getProjects);
router.post('/', createProject);

// routes /api/projects/:projectID
router.get('/:projectID', getProject);
router.put('/:projectID', updateProject);
router.delete('/:projectID', deleteProject);

// export router module
export default router;