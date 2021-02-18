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
  $('#problems-button').toggleClass('challenge-button');
});

$('#problems-button').click(function(){
  $('#problems').toggleClass('special');
  $('#results-button').toggleClass('challenge-button');
});

$('#results-button').click(function(){
  $('#results').toggleClass('special');
  $('#challenge-button').toggleClass('challenge-button');
});
