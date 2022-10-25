class Users {
  constructor(props) {
    Object.assign(this, props);
  }

  static findOne(query, callback = null) {
    let value = null;
    USER: for (let user of users) {
      for (let key in query) {
        if (!user.hasOwnProperty(key)) {
          continue USER;
        }
      }
      value = user;
      break;
    }
    return callback
      ? callback(value ? null : new Error('Not found'), value)
      : Promise.resolve(value);
  }

  static randomError() {
    let value = Math.random();
    return value < 0.5 ? new Error('Random error') : null;
  }

  save(callback = null) {
    return callback ? callback(Users.randomError()) : Promise.resolve();
  }
}

const users = [
  new Users({ gender: 'm', name: 'joe' }),
  new Users({ gender: 'f', name: 'alice' }),
];

module.exports = Users;
