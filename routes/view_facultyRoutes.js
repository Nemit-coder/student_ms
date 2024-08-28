const express = require("express");
const router = express.Router();
const Faculty = require("../Models/faculty");


router.get("/", async (req, res) => {
    const fetchedData = await Faculty.find()
    .then((x) => {
        res.render("view_faculty", {x})
    })
    .catch((y) => {
        console.log(y)
    })
})

module.exports = router;