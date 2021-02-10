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

// EDIT
router.get('/:id/edit', (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    res.render('edit.ejs', {
      task: task,
    });
  })
});

router.put('/:id', (req, res) => {
  Task.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then(() => { 
    res.redirect('/tasks');
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Task.findByPk(req.params.id).then((task) => {
    res.render('show.ejs', {
      task: task
    });
  })
});

// DELETE route
router.delete('/:id', (req, res) => {
	Task.destroy({ where: {id: req.params.id} }).then(() => {
	  res.redirect('/tasks');
	});
});

module.exports = router;