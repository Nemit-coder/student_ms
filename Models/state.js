const mongoose = require("mongoose");

const newState = new mongoose.Schema({
    statename: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: "1"
    }
})

const State = mongoose.model('state', newState);
module.exports = State;