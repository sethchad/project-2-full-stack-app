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


module.exports = router;