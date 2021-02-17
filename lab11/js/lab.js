// Lab 11: Libraries and jQuery
// Author: Maximilian Breall

//create first button
var challengeDiv = $('#challenge')
challengeDiv.append('<button id = challenge-button>Click me!</button>');
//create second button
var problemsDiv = $('#problems')
problemsDiv.append('<button id = problems-button>Click me!</button>');
//create third button
var resultsDiv = $('#results')
resultsDiv.append('<button id = results-button>Click me!</button>');

//Event listeners
$('#challenge-button').click(function(){
  $('#challenge').toggleClass('special');
});

/*
    var inputEl = document.getElementById('title-text');
    var changeTitle = inputEl.value;
    var newTitle = document.getElementById('title');
    newTitle.innerText = "Lab 10: " + changeTitle;
    //document.body.appendChild(titleEl);

});
*/
//   var nameEl = document.getElementById('user-name');
//   var userName = nameEl.value;
//   var sortedUserName = userName.split('').sort().join('');
//   console.log(sortedUserName);
//   var outputEl = document.getElementById('output');
//   outputEl.innerText = "Your user name: " + sortedUserName;
// });
