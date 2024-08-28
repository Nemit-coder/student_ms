const express = require("express");
const router = express.Router();
const Student = require("../Models/student");
const Course = require("../Models/course");
const City = require("../Models/city");
const Faculty = require("../Models/faculty");


router.get("/", async (req, res) => {
    try{
        const cities = await City.find()
        const course = await Course.find()
        const faculty = await Faculty.find()

        res.render("add_student", {cities,course,faculty});
    }catch (err) {
        console.log(err);
        res.status(500).send('server error');
    }
})

router.post("/", async (req, res) => {
    // const newStudent = new Student(data);
    // const newStudent = new Student({
    //     name: req.body.name,
    //     age: req.body.age
    // })

    const data = req.body;
    const newStudent = new Student(data)
    const response = await newStudent.save();

    if(response){
        console.log("Student Saved Successfully");
        res.redirect("view_student");
    }
})

module.exports = router;