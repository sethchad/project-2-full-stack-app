require("dotenv").config();
const express = require("express");
const app = express(); 
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");


// Middleware Starts
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Middleware Ends


// Token Verification
const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
      console.log(decodedUser);
  
      next();
    });
  };


// INDEX
app.get('/', (req, res) => {
    res.redirect('/auth/login')
})


// Controllers and Routes
app.use('/tasks', require('./controllers/tasksController.js'));
app.use('/users', require('./controllers/usersController.js'));
app.use('/groups', require('./controllers/groupsController.js'));
app.use('/auth', require('./controllers/authController.js'));


app.listen(process.env.PORT, () => {
    console.log("I'm listening");
});