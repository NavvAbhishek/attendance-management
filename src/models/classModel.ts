import mongoose  from "mongoose";

const ClassSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the user model
        required: [true, "Please provide a teacher's ID"]
    },
    year: {
        type: String,
        required: [true, "Please provide the year"],
    },
    semester: {
        type: String,
        required: [true, "Please provide the semester"],
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
    finishTime: {
        type: String,
        required: [true, "Please provide the finish time"],
    }
})

const Class = mongoose.models.classes || mongoose.model("classes",ClassSchema)

export default Class