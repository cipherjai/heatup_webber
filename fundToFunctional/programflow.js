console.log("\"It works");

if (5 == 5) {
  console.log(true);
}
let state = 'Philly';
let taxPercent = 0;
let totalTax = 0;
if (state === 'Philly') {
  taxPercent = 7/100;
}
else if (state !== 'FL') {
  taxPercent = 5.5/100;
}
else {
  taxPercent = 0;
}
let salary = console.log("Whats the salary ?");
console.log(parseInt(salary, 10));
console.log(typeof(parseInt(salary, 10)));
console.log("Tax is : " + 0.07*parseInt(salary,10));

// False Falsy
// False
// 0
// ""
// ''
// null
// undefined
// NaN

// Truthy
// Everything Not Falsy
// true
// 0.5
// "0"


console.log("What is the state code ??");
let states = 'TX';

switch (states) {
  case 'NY':
    console.log("New York!");
    break;
  case 'TX':
    console.log('Texas');
    break;
  default:
    console.log('Unknown');
    break;
}


/* For Loop */
for(let i = 0; i<3; i++)
{
  console.log(i);
}
