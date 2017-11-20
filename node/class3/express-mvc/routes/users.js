const express = require('express');

const router = express.Router();
const UserService = require('../services/user_service');

/* GET users listing. */
router.get('/', (req, res) => {
  res.locals.users = UserService.getAllUsers();
  res.render('users');
});

router.post('/', (req, res) => {
  const { name, age, sex } = req.body;
  const u = UserService.addNewUser(name, age, sex);
  res.json(u);
});

router.get('/:userId', (req, res) => {
  res.locals.user = UserService.getUserById(Number(req.params.userId));
  res.render('user');
})

router.post('/:userId/subscription', (req, res, next) => {
  try {
    const sub = UserService.createSubscription(Number(req.params.userId), req.body.url);
    res.json(sub);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
