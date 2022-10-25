class List {
  constructor(...args) { // ...변수는 가변 파라미터를 배열로 받는다.
    this.length = args.length;
    for(let i in args) { // for of, forEach 문은 인자로 값이 나오고, for in 문은 인자로 인덱스가 나온다.
      this[i] = args[i]; // 생성되는 list의 배열
    }
  }
  forEach(callback) {
    for(let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
  /** callback 함수를 this의 모든 요소에 대해 실행한 결과 반환 */
  //배열
  map(callback) {
    return this.reduce((prev, cur) => {// 2. 이전 값과 현재값으로 다음 값을 도출하는 함수
      let result = callback(cur); // 2-1. 모든 요소에 대해 callback 함수를 실행한 결과
      prev.push(result); // 2-2. 결과값을 계속 배열에 추가
      return prev; // 2-3. 현재 값이 추가된 배열 반환
    }, []); // 1. 빈 배열에서 시작
  }
  // //리스트
  // map(callback) {
  //   return this.reduce((prev, cur) => { // 2. 이전 값과 현재값으로 다음 값을 도출하는 함수
  //     let result = callback(cur); // 2-1. 모든 요소에 대해 callback 함수를 실행한 결과
  //     prev.push(result); // 2-2. 결과값을 계속 배열에 추가
  //     return prev; // 2-3. 현재 값이 추가된 배열 반환
  //   }, new List()); // 1. 빈 배열에서 시작
  // }
  /** 새로운 요소를 맨 뒤에 추가 */
  // push(element) {
  //   this[this.length] = element;
  //   this.length += 1;
  //   return this.length;
  // }
  reduce(callback, initialValue = null) {
    /* initialValue가 없으면 첫번째 요소 this[0]을 가져오고 for문을 1부터 시작 */
    let previousValue = initialValue ?? this[0];
    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
      /* 이전 값과 현재값으로 새로운 값을 도출하여 previousValue에 축적 */
      let currentValue = this[i];
      previousValue = callback(previousValue, currentValue);
    }
    return previousValue;
  }
  toString() {
   return this.reduce((prev, cur) => `${prev}, ${cur}`);
  }
}
// 오브젝트가 실제로 생성된 것을 인스턴스라고 한다.
let list = new List(1, 4, 9, 16); // constructor를 이용하여 인스턴스 생성
console.log(list.toString());
list.forEach((item) => console.log(item)); // 모든 요소를 한 줄에 하나씩 출력
let roots = list.map(Math.sqrt); // 모든 요소의 제곱근으로 새로운 List 생성
console.log({ roots });
let sum = roots.reduce((prev, cur) => prev + cur, 0);
console.log({ sum });
