var age = 10;
var name = 'Timmy';

if (age === 10) {
  // check the second condition
  if (name === 'Timmy') {
  	console.log('Hello Timmy!');
  }
}

// equivalent version with &&
if (age === 10 && name === 'Timmy') {
  console.log('Hello Timmy!');
}

// if age is greater than 12 and less than 20
var myAge = 14;
if ((myAge > 12) && (myAge < 20)) {
  console.log('You are a teenager');
 }

// common error
if (myAge > 12 && < 20)

// another common error
if ((12 < myAge) < 20) // -> ((true) < 20)

if (myAge < 20 || myAge < 100) {

}


// more complex
var occupation = 'worker';
if (name === 'Timmy' && age == 10 && occupation === 'worker')

// even more complex
age = 22;
wellDressed = true;
relatedToOwner = false;

if ((age >= 21 && wellDressed === true) || relatedToOwner)