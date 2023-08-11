const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('layout', { page: 'home' });
});

router.use(require('./controllers/user/UserRoutes'));

module.exports = router;
