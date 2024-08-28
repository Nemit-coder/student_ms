const express = require("express");
const router = express.Router();
const User = require("../Models/signup");

router.get("/", (req, res) => {
    res.render("login");
})

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});

    if(!user) {
        return res.render("login", {
            error : "Invalid Username or Password"
        });
    }

    return res.redirect("view_student");
})


module.exports = router;