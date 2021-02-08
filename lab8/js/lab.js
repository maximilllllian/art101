//create three functions that take a parameter test
//test 1 -- call functions in order
function firstThing(test) {
  console.log(test + ": First Thing <br>")
}
function secondThing(test) {
  console.log(test + ": Second Thing <br>")
}
function thirdThing(test) {
  console.log(test + ": Third Thing <br>")
}
firstThing("Test 1");
secondThing("Test 1");
thirdThing("test 1");
//test 2 -- call functions in order
setTimeout(function() {
  firstThing("Test 2");
} , 0);
setTimeout(function() {
  secondThing("Test 2");
} , 0);
setTimeout(function() {
  thirdThing("Test 2");
} , 0);
//test 3 -- adjust times, order is 2, 3, 1
setTimeout(function() {
  firstThing("Test 3")
}, 3000);
setTimeout(function() {
  secondThing("Test 3")
}, 1000);
setTimeout(function() {
  thirdThing("Test 3")
}, 2000);
