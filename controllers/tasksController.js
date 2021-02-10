const express = require('express');
const router = express.Router();

const Task = require('../models').Task;
const User = require('../models').User;
const Group = require('../models').Group;

// INDEX route
router.get("/", (req, res) => {
	Task.findAll( { order: ['id'] }).then((tasks) => {
		res.render("index.ejs", {
			tasks: tasks
		});
	});
});

// DELETE route
router.delete('/:id', (req, res) => {
	Task.destroy({ where: {id: req.params.id} }).then(() => {
	  res.redirect('/tasks');
	});
  });

module.exports = router;