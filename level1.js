'use strict';
//1. Write a function that takes three arguments, sums all three and returns the results

//INPUTS: numbers (3)
//OUTPUT: number (1)

//EXAMPLE INPUTS & OUTPUTS w/EDGE CASES
// 1,2,3 => 6
// 1, 'Gelato', 3 => 'Arguments must be numbers'
// TODO Figure out how to use parseInt() for this edge case 1, '2', 3 => 6

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
