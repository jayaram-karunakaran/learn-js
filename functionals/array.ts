//String to Array of characters
let str = "hello";
console.log(Array.from(str)); //1st method
console.log([...str]); //2nd method
console.log(Array.prototype.map.call(str, e => e)); //3rd method
console.log(Array.prototype.slice.call(str)); //4th method
// Output : ['h','e','l','l','o']

////////////////////////////////////////////////////////////////////////////////////////////////

//Middle value in array
let numArr = [0, 1, 2, 3, 4, 5];
var middle = numArr[Math.round((numArr.length - 1) / 2)];
console.log("middle val >>", middle);
// Output : 3

////////////////////////////////////////////////////////////////////////////////////////////////

// Create an Array from number
console.log(Array.from({ length: 10 }, (_, i) => i + 1));  //Using Array from 
console.log([...Array(10).keys()]); //Using Spread 
// Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

////////////////////////////////////////////////////////////////////////////////////////////////