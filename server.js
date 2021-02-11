require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');


// Middleware Starts
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// Middleware Ends


// Controllers and Routes
app.use('/tasks', require('./controllers/tasksController.js'));
app.use('/users', require('./controllers/usersController.js'));
app.use('/auth', require('./controllers/authController.js'));


// INDEX
app.get('/', (req, res) => {
    res.render('users/index.ejs')
})

app.listen(process.env.PORT, () => {
    console.log("I'm listening");
});