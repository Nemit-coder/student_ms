const express = require("express");
const router = express.Router();
const Faculty = require('../Models/faculty');

router.get("/", (req, res) => {
    res.render("add_faculty");
})

router.post("/", async (req , res) => {
    const data = req.body;
    const newFaculty = new Faculty(data);
    const response = await newFaculty.save();

    if(response){
        console.log("Faculty Saved Successfully");
        res.redirect("view_faculty");
    }
})

module.exports = router;