function findAndSaveUser(Users) {
  Users.findOne({})
  .then((user) => {
    user.name = 'zero';
    return user.save();
  })
  .then((user) => {
    return Users.findOne({ gender: 'm' });
  })
  .then ((user) => {
    console.log(user); // 생략
  })
  .catch(err => {
    console.error(err);
  });
}
findAndSaveUser(require('./Users.js'));
