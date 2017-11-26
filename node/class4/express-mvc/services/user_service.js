const User = require('../models/mongoose/user');
const Subscription = require('../models/in_memo/subsciption');

module.exports.getAllUsers = async function () {
  const users = await User.list();
  return users;
};

module.exports.addNewUser = async function (name, age, sex) {
  const user = await User.insert(name, age, sex);
  return user;
};

module.exports.getUserById = async function (userId) {
  const user = await User.getOneById(userId);
  return user;
};

module.exports.createSubscription = async function (userId, url) {
  const user = await User.getOneById(userId);
  if (!user) throw Error('No such a user!');
  const sub = Subscription.insert(userId, url);
  return sub;
};
