import { Router } from "express";
import { ProjectService } from "../views/projects.controller.js";

const projectRouter = Router()
const projectService = new ProjectService()

projectRouter.get("/", (req, res) => projectService.getProjects(req, res))
projectRouter.post("/create", (req, res) => projectService.createProject(req, res))
projectRouter.delete("/:project_id", (req, res) => projectService.deleteProjectById(req, res))
export default projectRouter