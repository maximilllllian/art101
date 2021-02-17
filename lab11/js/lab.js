// Lab 11: Libraries and jQuery
// Author: Maximilian Breall

//create first button
var buttonEl = $("challenge-button");
$("challenge-button").click(function() {


  });
//create second button
var buttonEl = $("problems-button");
$("problems-button").click(function() {

  });
//create third button
var buttonEl = $("results-button");
$("results-button").click(function() {



    var inputEl = document.getElementById('title-text');
    var changeTitle = inputEl.value;
    var newTitle = document.getElementById('title');
    newTitle.innerText = "Lab 10: " + changeTitle;
    //document.body.appendChild(titleEl);

});

//   var nameEl = document.getElementById('user-name');
//   var userName = nameEl.value;
//   var sortedUserName = userName.split('').sort().join('');
//   console.log(sortedUserName);
//   var outputEl = document.getElementById('output');
//   outputEl.innerText = "Your user name: " + sortedUserName;
// });
