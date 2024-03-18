import mongoose  from "mongoose";

const MarkedClassSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the user model
        required: [true, "Please provide a student's ID"]
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    course: {
        type: String,
        required: [true, "Please provide the course"],
    },
    date: {
        type: String,
        required: [true, "Please provide the date"],
    },
    startTime: {
        type: String,
        required: [true, "Please provide the start time"],
    },
    markedAt: {
        type: Date,
        default: Date.now, 
    },
})

const MarkedClass = mongoose.models.marked || mongoose.model("marked",MarkedClassSchema)

export default MarkedClass