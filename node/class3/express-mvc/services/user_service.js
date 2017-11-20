const User = require('../models/in_memo/user');
const Subscription = require('../models/in_memo/subsciption');

// 感觉用箭头函数的话虽然代码少了很多,但是可读性不是很好哎.
module.exports = {
  getAllUsers: User.list(),
  addNewUser: (name, age, sex) => User.insert(name, age, sex),
  getUserById: userId => User.getOneById(userId),
  createSubscription: (userId, url) => {
    const user = User.getOneById(userId);
    if (!user) throw Error('No such a user!');
    return Subscription.insert(userId, url);
  },
};

// module.exports.getAllUsers = function () {
//   return User.list();
// };
//
// module.exports.addNewUser = function (name, age, sex) {
//   return User.insert(name, age, sex);
// };
//
// module.exports.getUserById = function (userId) {
//   return User.getOneById(userId);
// };
//
// module.exports.createSubscription = function (userId, url) {
//   const user = User.getOneById(userId);
//   if (!user) throw Error('No such a user!');
//   return Subscription.insert(userId, url);
// };
