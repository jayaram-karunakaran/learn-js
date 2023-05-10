let str = "madam";

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

console.log(palindrome(str));

// Using Split Reverse method
console.log( str == (str).split('').reverse().join('') );

// Using Array Reverse method
console.log( Array.from(str).join('') == Array.from(str).reverse().join('') );