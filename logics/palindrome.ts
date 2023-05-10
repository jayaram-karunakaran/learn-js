let palindromString = "madam";

//Using Loop
function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome(palindromString));

// Using Split Reverse method
console.log( palindromString == (palindromString).split('').reverse().join('') );

// Using Array Reverse method
console.log( Array.from(palindromString).join('') == Array.from(palindromString).reverse().join('') );