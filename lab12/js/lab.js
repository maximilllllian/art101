// Lab 12: Conditionals
// Author: Maximilian Breall

//create a function sortingHat() that takes a string as an argument
function sortingHat (str) {
//counts letters in str and assigns it to a variable length
  var len = str.length;
//uses modulus (% operator) to get the remainder with 4
  var mod = len % 4;
  //create a conditional to show house depending on mod
  if (mod == 0) {
    return "Gryffindor. Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion, and its colors are scarlet and gold.";
    } else if (mod == 1){
    return "Ravenclaw. ";
    } else if (mod == 2){
    return "Slytherin";
    } else if (mod == 3){
    return "Hufflepuff. Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger.";
    };
  };
//create an event listener attached to #button
$("#button").click(function(){
//get the value in the #input text box, assign to variable name
  var name = $("#input").val();
        //   //get the length of the name
                // var nameLength = name.length;
// run sortingHat(name) and store the result in a variable house
  var house = sortingHat(name);
  $("#output").append('<p>The Sorting Hat has sorted you into ' + house);
});
