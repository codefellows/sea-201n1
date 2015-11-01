
// Single if. Defines an optional section of code
var name = 'Johnny';

console.log('how are you today?');
if (name === 'Johnny') {
	console.log('I am having a Johnny good day');
}
console.log('thanks come again!');

// A collection of if statements. Defines
// multiple optional sections of code
// NOT mutually exclusive. 
var age = 45;
var location = 'Arizona';
var food = 'pasta';

if (age === 45) {
	console.log('age is 45');
}
if (location === 'Washington') {
	console.log('location is Washington');
}
if (food === 'pasta') {
	console.log('food is pasta');
}

// if, else if, else if. Mutually exclusive at 
// most 1 will get triggered, although it is possible
// that none will

if (age === 45) {
	console.log('age is 45');
}
else if (location === 'Washington') {
	console.log('location is Washington');
}
else if (food === 'pasta') {
	console.log('food is pasta');
}

// if, else if, else if, else. Mutually exclusive at
// most 1 will get triggered. However, at least 1
// will always be trigged. The else value acts as a
// 'default', if nothing else gets triggered
if (age === 45) {
	console.log('age is 45');
}
else if (location === 'Washington') {
	console.log('location is Washington');
}
else if (food === 'pasta') {
	console.log('food is pasta');
}
else {
	console.log('none of the above is true');
}

// simple mutually exclusive choose one branching behavior
if (age === 45) {
	console.log('age is 45');
}
else {
	console.log('age is not 45');
}

// if vs switch
if (age === 10) {
  console.log('you are 10');
}
else if (age === 45) {
  console.log('you are 45');
}
else {
  console.log('age not found');
}

switch (age) {
	case 10:
	  console.log('you are 10');
	  break;
	case 45:
	  console.log('you are 45');
	  break;
	default:
	  console.log('age not found')
}

var direction = prompt('You are in a dark dungeon. Do you turn left or right?')

if (direction === 'left') {
	// stuff
}
else if(direction == 'right') {
	// other stuff
}
else {
	console.log('You died. That is not a valid direction');
}





