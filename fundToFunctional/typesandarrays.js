var x = 'global variable';
let y = 'local variable';

console.log(this.x);
console.log(this.y);

function letTest() {
  let x = 1;
  if(true){
    let x = 2;
    console.log(x);
  }
  console.log(x);
}



// Strings and numbers

let value = 9.6;
console.log(typeof(value));

let dummyValue = 4.1 + 4.3;
console.log(dummyValue);
console.log(Math.floor(dummyValue));

let zerovalue = 10/0;
console.log(zerovalue);

let zero = 0/0;
console.log(zero, typeof(zero));

// Boolean Values

value = true;
console.log(value, typeof(value));

// Undefined and Null Data types
// we don't use = sign to define a variable - it will assign Undefined
// Assign null to blank out that variable.

let something;
console.log("something is " + something);

something = null;
console.log(something);
console.log(typeof(something));

// Arrays
let values = [];
console.log(typeof(values));
// subscripting
values[0] = 1;
console.log(typeof(values[0]));
values[1] = "meha";
console.log(typeof(values[1]));
console.log(values);
values = [];
values.push(44);
values.push(21);
values.push(-100);
console.log(values);
let result = values.pop();
console.log(result);

result = values.shift();
console.log("Shifting \n");
console.log(result);
console.log(values);
values.push(44);
values.push(21);
values.push(-100);

// delete an element from an array
// splice(index no, no. of value)
// splice the values from the index no and how many

console.log(values.splice(3, 1));
// index no is also included
console.log(values);
