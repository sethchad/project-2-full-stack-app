const express = require('express');
const router = express.Router();

const Task = require('../models').Task;
const User = require('../models').User;
const Group = require('../models').Group;

// INDEX route
router.get("/", (req, res) => {
	Group.findAll( { order: ['id'] }).then((groups) => {
		res.render('groups/index.ejs', { groups });
	});
});

// NEW
router.get('/new', (req, res) => {
	res.render('groups/new.ejs');
});
  
router.post('/', (req, res) => {
	Group.create(req.body).then(() => {
		res.redirect('/groups');
	})
});

// EDIT
router.get('/:id/edit', (req, res) => {
  Group.findByPk(req.params.id, {
    include: [User]
  }).then((group) => {
    res.render('groups/edit.ejs', { group });
  })
});

router.put('/:id', (req, res) => {
  Group.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then(() => { 
    res.redirect('/groups');
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Group.findByPk(req.params.id, {
    include: [User]
  }).then((group) => {
    console.log(group);
    res.render('groups/show.ejs', { 
        group: group 
    });
  })
});

// // DELETE route
// router.delete('/:id', (req, res) => {
// 	Task.destroy({ where: {id: req.params.id} }).then(() => {
// 	  res.redirect('/tasks');
// 	});
// });



module.exports = router;