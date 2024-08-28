const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    facultyname:{
        type: String,
        required: true
    },
    courseteaching: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: "1"
    }
})

const faculty = mongoose.model('faculty', facultySchema);

module.exports = faculty;