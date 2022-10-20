var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS() {
    colsole.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);
