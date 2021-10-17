# Promise-test
Test of Promise  
Promise内部では順番通りに処理されるが、その外側では順番通りには処理されない。

実行結果例

Promise-1
Promise-2
test is test
testFinal is null
test2 is test+2
test3 is test+2+3
test4 is test+2+3+4
testFinal innerPromise is test+2+3+4