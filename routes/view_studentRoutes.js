const express = require("express");
const router = express.Router();
const Student = require("../Models/student");



router.get("/", async (req, res) => {
    const fetchedData = await Student.find()
    .then((x) => {
        res.render("view_student", {x})
    })
    .catch((y) => {
        console.log(y)
    })
})

module.exports = router;