const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    cityname: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: "1"
    }
})

const City = mongoose.model('city', citySchema);
module.exports = City;