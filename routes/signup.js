const express = require("express");
const router = express.Router();
const Singup = require("../Models/signup");

router.get("/", (req, res) => {
    res.render("signup");
})

router.post("/", async (req, res) => {
    const data = req.body;
    const newSignup = new Singup(data);
    const response = await newSignup.save();

    if(response){
        console.log("Sign Completed Successfully");
        res.redirect("/");
    }
})

module.exports = router;