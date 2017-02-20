'use strict'
//1. Find the sum of all the numbers in an array

//INPUTS: array
//OUTPUTS: number

//EXAMPLE INPUTS & OUTPUTS w/EDGE CASES:
//[1,2,3] => 6
//[2,4,6] => 12
//[2, 4, 'Yoyoyo'] => 'Array must contain all numbers'

//2 METHODS TO SOLVE:
//1. For loop
//2. Reduce method on array

function sumArray(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] !== 'number'){
      // console.log('Array must contain all numbers');
      return 'Array must contain all numbers';
    }
    sum += array[i];
  }
  // console.log(sum);
  return sum;
}

//reduce method
[1,2,3].reduce(function(initialValue, currentValue){
  return initialValue + currentValue;
}, 0);

// console.log([1,2,3].reduce(function(initialValue, currentValue){
//   return initialValue + currentValue;
// }, 0));

sumArray([1,2,3]);
sumArray([2,4,6]);
sumArray([2, 4, 'yoyoyo']);
