const express = require('express');
const path = require('path');
const db = require("./db");
const bodyParser = require('body-parser');
const hbs = require("hbs");
const app = express();
const template_path = path.join(__dirname, './templates/views');
const partial_path = path.join(__dirname, './templates/partials');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partial_path);


app.get("/", (req, res) => {
    res.render("index");
})

// Import The Router Files
const view_studentRouter = require('./routes/view_studentRoutes');
const add_studentRouter = require('./routes/add_studentRoutes');
const view_facultyRouter = require('./routes/view_facultyRoutes');
const add_facultyRouter = require('./routes/add_facultyRoutes');
const view_courseRouter = require('./routes/view_courseRoutes');
const add_courseRouter = require('./routes/add_courseRoutes');
const view_cityRouter = require('./routes/view_cityRoutes');
const add_cityRouter = require('./routes/add_cityRoutes');
const view_stateRouter = require('./routes/view_stateRoutes');
const add_stateRouter = require('./routes/add_stateRoutes');
const signup = require("./routes/signup");
const login = require('./routes/login');

// Use The Routers
app.use('/view_student', view_studentRouter);
app.use('/add_student', add_studentRouter);
app.use('/view_faculty', view_facultyRouter);
app.use('/add_faculty', add_facultyRouter);
app.use('/view_course', view_courseRouter);
app.use('/add_course', add_courseRouter);
app.use('/view_city', view_cityRouter);
app.use('/add_city', add_cityRouter);
app.use('/view_state', view_stateRouter);
app.use('/add_state', add_stateRouter);
app.use('/signup', signup);
app.use('/login', login);






app.listen(3000, () => {
    console.log("Listening on port 3000");
})