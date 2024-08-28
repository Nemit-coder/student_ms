const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    coursename: {
        type: String,
        required: true
    },
    courseprice: {
        type: Number,
        required: true
    },
    courseduration: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: "1"
    }
})

const Course = mongoose.model('course', courseSchema);
module.exports = Course;