const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

/* for 반복문을 forEach()로 바꾸기 */
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach((item) => copy.push(item));

console.log(copy);
