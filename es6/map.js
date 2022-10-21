const array1 = [1, 4, 9, 16];

//pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
//expected output: Array [2, 8, 18, 32]

const roots = array1.map(Math.sqrt);

console.log(roots);
//expected output: Array [1, 2, 3, 4]
