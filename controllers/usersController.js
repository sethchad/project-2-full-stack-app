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
        res.render('users/profile.ejs', { user });
    });
  });

// // GET USER PROFILE WITH AUTHENITCATION
// router.get('/profile/:id', (req, res) => {
// 	if (req.user.id == req.params.id) {
// 		User.findByPk(
// 			req.params.id, {
// 				include: [
// 					{ model: Task }, 
// 					{ model: Group },
// 					//{ model: UserTask },
// 				],
// 			}).then((user) => {
// 			res.render('users/profile.ejs', { user });
// 		});
// 	}
// });

// EDIT PROFILE
router.put("/profile/:id", (req, res) => {
	Group.findAll().then((groups) => {
		let numGroups = groups.length;
		
		if (req.body.groupId > numGroups) { req.body.groupId = 1 }

		User.update(req.body, {
			where: { id: req.params.id },
			returning: true,
		}).then(() => {
			res.redirect(`/users/profile/${req.params.id}`);
		});
	});
})

// DELETE USER
router.delete("/profile/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id }}).then(() => {
    res.redirect("/");
  });
});

module.exports = router;