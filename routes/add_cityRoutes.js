const express = require("express");
const router = express.Router();
const City = require("../Models/city");

router.get("/", (req, res) => {
    res.render("add_city");
})

router.post("/", (req, res) => {
    const data = req.body;
    const newCity = new City(data);
    const response = newCity.save();

    if(response){
        console.log("City Saved Successfully");
        res.redirect("view_city");
    }
})

module.exports = router;