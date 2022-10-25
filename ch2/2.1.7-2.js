const condition = Math.random() < 0.5; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
promise
  .then((message) => {
    return new Promise((resolve) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log('메서드 체이닝');
      return new Promise((resolve) => {
        resolve(message2);
      });
  })
  .then(console.log)
  .catch(console.error);
