import Queue from './Queue.mjs'

let queue = new Queue(10);

const timeout = setTimeout(() => {
  queue.add('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행');
  if (queue.size > 0) {
    console.log(queue.delete());
  }
}, 1000);

const timeout2 = setTimeout(() => {
  queue.add('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  queue.add('즉시 실행');
});

const immediate2 = setImmediate(() => {
  queue.add('실행되지 않습니다');
});

clearImmediate(immediate2);
