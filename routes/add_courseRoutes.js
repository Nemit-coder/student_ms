const express = require("express");
const router = express.Router();
const Course = require("../Models/course");

router.get("/", (req, res) => {
    res.render("add_course");
})

router.post("/", async (req, res) => {
    const data = req.body;
    const newCourse = new Course(data);
    const response = newCourse.save();

    if(response) {
        console.log("Course Saved Successfully");
        res.redirect("view_course");
    }
})

module.exports = router;