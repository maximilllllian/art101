//find output and assign to variable outputEl
//create new element and assign to variable new1El
//create new element and assign to variable new2El
var outputEl = document.getElementById("output");
var new1El = document.createElement('div');
var new2El = document.createElement('div');

//document.getElementById();
document.body.appendChild(new1El);
document.body.appendChild(new2El);

//change HTML attribute to say 'this is a new element'
//change HTML attribute to say 'this is a new new element'
new1El.innerHTML = 'this is a new element';
new2El.innerHTML = 'this is also a new element';
new1El.style.color = 'maroon';
document.getElementById('name').style.color = 'teal';

//bonus task
var upperEl = document.getElementById('main');
upperEl.innerHTML = 'this is the bonus task';
document.body.insertBefore(upperEl, null);
