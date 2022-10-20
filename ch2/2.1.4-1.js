function add1(x, y) {
  return x + y;
  }

  const add2 = (x, y) => {
  return x + y;
  };

  const add3 = (x, y) => x + y;

  const add4 = (x, y) => (x + y);

  function not1(x) {
  return !x;
  }

  const not2 = x => !x;

  const opertation = {add1, add2, add3, add4, not1, not2};

  console.log(add(1, 1));
  console.log(opertation.add1(1,2));
  console.log(opertation.not2(3 <= 3));
