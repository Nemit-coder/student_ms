const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/student_ms";  // Main base url for MongodDB Database

mongoose.connect(mongoURL); // Connecting MongoDB to Nodejs through Mongoose

const db = mongoose.connection; // Saving these connection into a variable

db.on('connected', () => {
    console.log("Connected To MongoDB Successfully");
})

db.on('error', (err) => {
    console.log("Error in MongoDB : ", err);
})

db.on('disconnected', () => {
    console.log("Disonnected To MongoDB");
})

// Exporting The Connection Variable
module.exports = db;