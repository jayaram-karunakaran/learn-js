let str ="hello";
let numArr = [0,1,2,3,4,5];

//String to Array of characters
console.log(Array.from(str)); //1st method
console.log([...str]); //2nd method
console.log(Array.prototype.map.call(str, e => e)); //3rd method
console.log(Array.prototype.slice.call(str)); //4th method

//Middle value in array
var middle = numArr[Math.round((numArr.length - 1) / 2)];
console.log("middle val >>", middle);




