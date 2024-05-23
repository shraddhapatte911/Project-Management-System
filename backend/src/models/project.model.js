import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    project_manager: {
        type: mongoose.Schema.ObjectId,
        default: null
    },
    project_lead: {
        type: String,
        default: null
    },
    project_devs: {
        type: [String],
        default: []
    }
}, { timestamps: true })

export const ProjectModel = mongoose.model("projects", ProjectSchema)
