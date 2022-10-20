const candyMachine = {
  status: {
    name:'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
};
const { getCandy, status: { count } } = candyMachine;

//getCandy(); // this를 못찾음
getCandy.call(candyMachine); // candyMachine.getCandy();
console.log({ count });
