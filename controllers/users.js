const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// Index route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.render('users/index.ejs', { users });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

// Show route to get a specific user's pantry
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.render('users/show.ejs', { user });
  } catch (error) {
    console.log(error);
    res.redirect('/users');
  }
});

module.exports = router;
