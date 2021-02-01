//my transportation array
let myTransport = ['skateboard', 'bus', 'car'];

//my primary method of transportation
let myMainRide = {
  make: 'skateboard',
  model: 'creature',
  color: 'green and blue',
  year: 2020,
  ownIt: true,
};
myMainRide.age = 2021 - myMainRide.year;

//print myTransport
document.writeln ("My methods of transportation: " + myTransport + "<br>");

//print myMainRide object
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
