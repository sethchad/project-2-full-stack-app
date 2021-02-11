const express = require('express');
const router = express.Router();

const Task = require('../models').Task;
const User = require('../models').User;
const Group = require('../models').Group;
const UserTask = require('../models').UserTask;

// GET USER PROFILE
router.get('/profile/:id', (req, res) => {
	User.findByPk(
		req.params.id, {
			include: [
				{ model: Task }, 
				{ model: Group },
				//{ model: UserTask },
			],
		}).then((user) => {
    //   Team.findAll().then((group) => {
    //     res.render('users/profile.ejs', { user, group });
    //   });
        res.render('users/profile.ejs', { user });
    });
  });

// EDIT PROFILE
router.put("/profile/:id", (req, res) => {
	User.update(req.body, {
		where: { id: req.params.id },
		returning: true,
	}).then(() => {
		res.redirect(`/users/profile/${req.params.id}`);
	});
});

// DELETE USER
router.delete("/profile/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id }}).then(() => {
    res.redirect("/");
  });
});

module.exports = router;