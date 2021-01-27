//define skateboard variables
const make = "skateboard";
const model = "creature";
const color = "green and blue";
const year = 2020;
const ownIt = true;
const age = 2021 - year;

//writes in document
document.writeIn("Make: " + make + "<br>");
document.writeIn("Model: " + model + "<br>");
document.writeIn("Color: " + color + "<br>");
document.writeIn("Year: " + year + "<br>");
//if-else statement :)
if (ownIt) {
  document.writeIn("Owns it?: yes" + "<br>");
} else {
  document.writeIn("Owns it?: no" + "<br>");
}

document.writeIn("Age: " + age + "<br>");
