const fs = require('fs');
let [a, b, c] = fs.readFileSync('/dev/stdin').toString().split('\n');
let mul = parseInt(a) * parseInt(b) * parseInt(c);
let counting = new Array(10); // 길이가 10인 배열을 만들고
counting.fill(0); // 값을 0으로 채운다
while (mul) {
  counting[mul % 10]++;
  mul /= 10;
  mul = Math.floor(mul);
}
for (let count of counting) {
  console.log(count);
}
