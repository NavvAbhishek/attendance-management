import mongoose  from "mongoose";

const MarkedClassSchema = new mongoose.Schema({
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
})

const MarkedClass = mongoose.models.marked || mongoose.model("marked",MarkedClassSchema)

export default MarkedClass