function capEveryName(names) {
  var newNames = [];
  for (var i = 0; i < names.length; i++) {
  	var name = names[i].charAt(0).toUpperCase();
  	name + names[i].substring(1, names[i].length -1);
  	newNames[i] = name;
  }
  return newNames;
}

function stuffInDivTag(names) {

}

var names = ['bobby', 'tammy', 'john', 'liz'];
var capNames = capEveryName(names);
stuffInDivTag(names);

function subtract(a, b) {

  var result = a - b;
  return result;
}

var a = 10;
var b = 20;
// argument and parameter names match
var result = subtract(a, b); // => subtract(10, 20)
// number literal values
var result2 = subtract(10, 20);
var result3 = subtract(b, a); // => subtract(20, 10)

function printCatName(cat) {
	console.log(cat + ' meow');

}

// confusing to you... but not to javascript!
// Arg and parameter names do not have to match
// and often will not.
var dog = 'Moewskiers';
printCatName(dog);



















