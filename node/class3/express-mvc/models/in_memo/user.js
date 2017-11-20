const users = [];
class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    User.id += 1;
    this.id = User.id;
  }

  static getName() {
    return this.name;
  }

  static insert(name, age, sex) {
    const u = new User(name, age, sex);
    User.users.push(u);
    return u;
  }

  static getOneByName(name) {
    return User.users.find(u => u.name === name);
  }

  static getOneById(userId) {
    return User.users.find(u => u.id === userId);
  }

  static list() {
    return User.users;
  }

  static get ['users']() {
    return users;
  }
}

User.users = [];
User.id = 0;

module.exports = User;
// console.log(User.list());
// console.log(User.insert('htkz', 100, 'male'));
// console.log(User.insert('fdsa', 90, 'female'));
// console.log(User.list());
// console.log(User.getOneByName('htkz'));
