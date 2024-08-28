const express = require("express");
const router = express.Router();
const City = require("../Models/city");

router.get("/", async (req, res) => {
    const fetchedData = await City.find()
    .then((cities) => {
        res.render("view_city", {cities})
    })
    .catch((y) => {
        console.log(y);;
    })
})

module.exports = router;