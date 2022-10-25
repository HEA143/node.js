async function findAndSaveUser(Users) {
  let user = await Users.findOne({});
  user.name = 'zero';
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
  console.log(user); // 생략
}
findAndSaveUser(require('./Users.js'));
