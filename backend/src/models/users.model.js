import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    experience: {
        type: mongoose.Types.Decimal128,
        required: true,
        default: 0
    },

    designation: {
        type: String,
        required: true,
        default: "NA"
    },

    role: {
        type: String,
        enum: ["TEAM MEMBER", "PROJECT MANAGER", "TEAM LEAD"],
        default: "TEAM MEMBER"
    }
}, { timestamps: true })

export const UserModel = mongoose.model("users", UserSchema)