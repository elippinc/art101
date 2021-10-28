/**
 * Author:    Evelyn
 * Created:   10/27/2021
 *
 * (c) Copyright by Evie

 **/
 function divide(x,y){
   return x / y;
 }

 // test function
 console.log("What is 100/8? ", divide(100, 8));
 console.log("What is 7386/2? ", divide(7386, 2));

array = [100, 8, 7386, 2]
console.log("My array", array);

var result = array.map(divide);

conosle.log("Divide of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

console.log("Squaretoot of array:", results);
