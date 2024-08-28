const express = require("express");
const router = express.Router();
const State = require("../Models/state");


router.get("/", (req, res) => {
    res.render("add_state");
})

router.post("/", async (req, res) => {
    const data = req.body;
    const newState = new State(data);
    const response = await newState.save();
    if(response) {
        console.log("State Saved Successfully")
        res.redirect("view_state");
    }
})

module.exports = router