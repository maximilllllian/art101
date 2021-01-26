//define skateboard variables
const make = "skateboard";
const model = "creature";
const color = "blue and orange";
const year = 2020;
const ownIt = true;
const age = 2021 - year;

document.writeIn("Make: " + make);
document.writeIn("Model: " + model);
document.writeIn("Color: " + color);
document.writeIn("Year: " + year);
if (ownIt) {
  document.writeIn("Owns it?: yes");
}
else {
  document.writeIn("Owns it?: no");
}
document.writeIn("Age: " + age);
