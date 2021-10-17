let testFinal = "null";
function PromiseTest(){
  return new Promise((resolve, reject) => {
    console.info('Promise-1');
    resolve(new Promise((resolve, reject) => {
      console.info('Promise-2');
      const test="test";
      console.info('test is ' + test);
      resolve(test);
    })
    .then(test2 => {
      test2 = test2 + "+2";
      console.info('test2 is ' + test2);
      return test2;
    })
    );
  });
}

PromiseTest().then(test3 => {
  test3 = test3 + "+3";
  console.info('test3 is ' + test3);
  return test3;
}).then(test4 => {
  test4 = test4 + "+4";
  console.info('test4 is ' + test4);
  testFinal = test4;
  console.info('testFinal innerPromise is ' + testFinal);
  return test4;
});

console.info('testFinal is ' + testFinal); // null!