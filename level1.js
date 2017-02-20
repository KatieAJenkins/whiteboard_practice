'use strict';
//1. Write a function that takes three arguments, sums all three and returns the results

//INPUTS: numbers (3)
//OUTPUT: number (1)

//EXAMPLE INPUTS & OUTPUTS w/EDGE CASES:
// (1,2,3) => 6
// (1, 'Gelato', 3) => 'Arguments must be numbers'
// TODO Figure out how to use parseInt() for this edge case 1, '2', 3 => 6

//2 METHODS TO SOLVE:
//1. sum all numbers together
//2. TODO

function sum (num1, num2, num3){
  // write edge case for argument === NaN
  if(isNaN(num1) === true || isNaN(num2) === true || isNaN(num3) === true){
    // console.log("Arguments must be numbers");
    return "Arguments must be numbers";
  }
  //return sum of all 3 arguments
  var sum = num1 + num2 + num3;
  // console.log(sum);
  return sum;
}


sum(1, 2 , 3);
sum(1, 'Gelato', 3);
sum('1', '2', 3);

//2. Write a function that takes a string and returns the uppercase version of that string with an “!

//INPUTS: string
//OUTPUTS: string

//EXAMPLE INPUTS & OUTPUTS w/EDGE CASES
// 'hello' => 'HELLO!'
// 4 => 'Must enter a string'

//2 METHODS TO SOLVE:
//1. string toUpperCase method, then concat '!'
//2. TODO

function toUpperString(string){
  if(typeof(string) !== 'string'){
    // console.log('Must enter a string');
    return 'Must enter a string';
  }
  var upperCaseString = string.toUpperCase();
  // console.log(upperCaseString + '!');
  return upperCaseString + '!';
};

toUpperString('hello');
toUpperString(4);

//3. Write a function that takes 2 arguments and returns the bigger of the two

//INPUTS: numbers(2)
//OUTPUTS: number (1)

//EXAMPLE INPUTS & OUTPUTS w/EDGE CASES
// (3, 7) => 7
// (10, 3) => 10
// if NaN => 'Arguments must be a number'

//2 METHODS TO SOLVE:
//1. Use boolean to compare the two
//2. TODO

function largest(num1, num2){
  if(isNaN(num1) === true || isNaN(num2) === true){
    // console.log('Arguments must be a number');
    return 'Arguments must be a number';
  }
  if(num1 > num2){
    // console.log(num1);
    return num1;
  }
  // console.log(num2);
  return num2;

};

largest(3,7);
largest(10,3);
largest('cat' , 3);
