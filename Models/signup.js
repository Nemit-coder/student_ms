const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required : true
    }
})

const Signup = mongoose.model('signup', signupSchema);
module.exports = Signup;