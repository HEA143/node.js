const createQueue = (max) => ({
  array: new Array(max),
  size: 0,
  front: -1,
  rear: -1,
  add(value) {
    if (this.size == max) {
      throw Error('The queue is full,');
    }
    this.size += 1;
    this.rear = (this.rear + 1) % max;
    this.array[this.rear] = value;
  },
  delete() {
    if (this.size == 0) {
      throw Error('The queue is empty.');
    }
    this.size -= 1;
    this.front = (this.front + 1) % max;
    return this.array[this.front];
  },
});

function solution(arr) {
  let answer = []; // 정답 배열
  let queue = createQueue(1000000);
  for (let item of arr) {
    queue.add(item);
  }
  let prev = null; // 이전 값을 저장할 변수
  while (queue.size > 0) {
    let data = queue.delete();
    if (data == prev) { // 이전 값과 연속이면
      continue; // skip
    }
    answer.push(data); // 새로운 값을 정답 배열에 추가
      prev =data; // 이전 값을 저장
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
// [1, 3, 0, 1]
console.log(solution([4, 4, 4, 3, 3]));
// [4, 3]
