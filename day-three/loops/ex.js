
var number = 0; // initialization
while (number < 10) { // condition
	console.log(number);
	number++; // update
}

// equivalent for loop
for (var i=0; i < 10; i++) {
	console.log(i);
}

// every other number
for (var i = 0; i < 10; i+=2) {
	console.log(i);
}


// do while
do {
  var input = prompt('Say yes');
} while (input != 'yes')

var input = prompt('Say yes');
while (input != 'yes') {
	input = prompt('Say yes');
}



function addTwo(x) {
	return x + 2;
}

var num = addTwo(4);


for (var i = 14; i>=0; i-=2)






