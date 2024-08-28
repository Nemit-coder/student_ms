const express = require("express");
const router = express.Router();
const State = require("../Models/state");

router.get("/", async (req, res) => {
    const fetchedData = await State.find()
    .then((state) => {
        res.render("view_state", {state})
    })
    .catch((y) => {
        console.log(y);;
    })
})


module.exports = router;