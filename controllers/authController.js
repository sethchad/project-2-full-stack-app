const express = require('express');
const router = express.Router();


// GET SIGNUP FORM
router.get('/signup', (req, res) => {
  res.render('users/signup.ejs')
});
  
// GET LOGIN PAGE
router.get('/login', (req, res) => {
	res.render('users/login.ejs');
});


module.exports = router;