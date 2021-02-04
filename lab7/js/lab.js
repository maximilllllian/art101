//create new function in file
//sortName-- this is a function that takes user's name and sorts the letters

var userName = window.prompt("Hey, tell me your name");

function sortUserName (){

  console.log("Your name: ", userName);
  //split string into array
  var nameArraySorted = userName.toLowerCase().split('').sort().join('');
  //log array to console
  console.log('nameArraySorted: ', nameArraySorted);
  //sort array
  return nameArraySorted;
}
document.writeln("Here's your sorted name: ",
  sortUserName(), "</br>");
