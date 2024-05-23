import { ProjectModel } from "../models/project.model.js";

export class ProjectService {
    constructor() { }

    getProjects = async (req, res) => {
        try {
            const response = await ProjectModel.find({})
            return res.json(response)
        } catch (error) {
            throw new Error(error)
        }
    }

    getProjectById = async (req, res) => {
        try {
            const { projectId } = req.params
            const response = await ProjectModel.findById({ _id: projectId })
            return res.json(response)
        } catch (error) {
            throw new Error(error)
        }
    }

    createProject = async (req, res) => {
        try {
            const response = await ProjectModel.create(req.body)
            return res.json(response)
        } catch (error) {
            throw new Error(error)
        }
    }

    deleteProjectById = async (req, res) => {
        const { project_id } = req.params
        try {
            const response = await ProjectModel.deleteOne({ _id: project_id })
            return res.json(response)
        } catch (error) {
            throw new Error(error)
        }
    }

}