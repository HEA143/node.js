var candyMachine = {
  status: {
    name:'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};
var getCandy = candyMachine.getCandy.bind(candyMachine);
var count = candyMachine.status.count;

console.log(getCandy());
console.log({ count });
