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


// NEW
router.get('/new', (req, res) => {
	res.render('new.ejs');
});
  
router.post('/', (req, res) => {
	Task.create(req.body).then(() => {
		res.redirect('/tasks');
	})
});

// DELETE route
router.delete('/:id', (req, res) => {
	Task.destroy({ where: {id: req.params.id} }).then(() => {
	  res.redirect('/tasks');
	});
});

module.exports = router;