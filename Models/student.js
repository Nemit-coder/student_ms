const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    middlename:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    mobilenumber:{
        type: Number,
        required: true
    },
    altmobilenumber:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    course_fees:{
        type: Number,
        required: true
    },
    paid_fees:{
        type: Number,
        required: true
    },
    faculty:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        default: 1
    }
})

const Student = mongoose.model('student', studentSchema);
module.exports = Student;