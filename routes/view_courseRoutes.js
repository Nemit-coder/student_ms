const express = require("express");
const router = express.Router();
const Course = require("../Models/course");

router.get("/", async (req, res) => {
    const fetchedData = await Course.find()
    .then((x) => {
        res.render("view_course", {x})
    })
    .catch((y) => {
        console.log(y)
    })
})

module.exports = router;