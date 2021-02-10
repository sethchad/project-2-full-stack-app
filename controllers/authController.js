const express = require('express');
const router = express.Router();

const Task = require('../models').Task;
const User = require('../models').User;
const Group = require('../models').Group;

// GET SIGNUP FORM
router.get('/signup', (req, res) => {
  res.render('users/signup.ejs')
});
  
// GET LOGIN PAGE
router.get('/login', (req, res) => {
	res.render('users/login.ejs');
});


// POST LOGIN
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    }
  }).then((foundUser) => {
    res.redirect(`/users/profile/${foundUser.id}`);
  })
});

// POST - CREATE NEW USER FROM SIGNUP FORM
router.post('/', (req, res) => {
  User.create(req.body).then((newUser) => {
    res.redirect(`/users/profile/${newUser.id}`);
  });
});

module.exports = router;