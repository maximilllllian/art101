//define skateboard variables
const make = "skateboard";
const model = "creature";
const color = "green and blue";
const year = 2020;
const ownIt = true;
const age = 2021 - year;

//writes in document
document.writeIn("Make: " + make);
document.writeIn("Model: " + model);
document.writeIn("Color: " + color);
document.writeIn("Year: " + year);
//if-else statement :)
if (ownIt) {
  document.writeIn("Owns it?: yes");
}
else {
  document.writeIn("Owns it?: no");
}

document.writeIn("Age: " + age);
