const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await UserController.list();
  res.render('layout', { page: 'user/user-index', users });
});

router.get('/users/create', (req, res) => {
  res.render('layout', { page: 'user/user-create' });
});

router.post('/api/users', async (req, res) => {
  await UserController.create(req.body);
  res.redirect('/users/create');
});

module.exports = router;
