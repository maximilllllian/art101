/*
Author: Maximilian Breall
*/
//creates button
var buttonEl = document.getElementById('submit-button')
//add an event listener to button. Sorts and prints out user name
buttonEl.addEventListener('click', function(){
  var nameEl = document.getElementById('user-name');
  var userName = nameEl.value;
  var sortedUserName = userName.split('').sort().join('');
  console.log(sortedUserName);
  var outputEl = document.getElementById('output');
  outputEl.innerText = "Your user name: " + sortedUserName;
});

//create second button element
var titleEl = document.getElementById('title-change')
//add an event listener to button. Changes the title of the page
titleEl.addEventListener('click', function(){
  var inputEl = document.getElementById('title-text');
  var changeTitle = inputEl.value;
  var newTitle = document.getElementById('title');
  newTitle.innerText = "Lab 10: " + changeTitle;
  //document.body.appendChild(titleEl);
});
