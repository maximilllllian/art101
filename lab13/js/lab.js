// Lab 13: Loops
// Author: Chloe Seifert

// Create a "FizzBuzz" function
function fizzBuzz () {
// Loop through numbers 1 to 200, listing them as you go
  for (var num = 1; num <=200; num++){
    var str = ''
  // If the number is a multiple of 3, if should print "Fizz!"
      if (num % 3 == 0){
        str += "Fizz";
        $("#output").append("<p>" + str + "</p>");
      }
  // If the number is a multiple of 5, it should print "Buzz!"
      if(num % 5 == 0){
        str += "Buzz";
        $("#output").append("<p>" + str + "</p>");
      }
  // If the number is a multiple of 7, it should print "Boom!"
      if(num % 7 == 0){
        str += "Boom";
        $("#output").append("<p>" + str + "</p>");
      }
  // If the number is a multiple of 10, it should print "Bang!"
      if(num % 10 == 0){
        str += "Bang";
        $("#output").append("<p>" + str + "</p>");
      }
  // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.
      if (str == ''){
        str = num;
        $("#output").append("<p>" + str + "</p>");
      }
    }

// Don't forget to call your function.
};

fizzBuzz();
