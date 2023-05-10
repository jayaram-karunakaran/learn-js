// Check Valid Parenthesis using recursion function

let pair = { "{": "}", "[": "]", "(": ")" };

function check(str) {
  if (str.length) {
    console.log(str);
    const isFirstAndLastPairMatch = Boolean(str[str.length - 1] && (pair[str[0]] == str[str.length - 1]));
    const nextPairMatch = Boolean(str[1] && (pair[str[0]] == str[1]));
    const lastPairMatch = Boolean(str[str.length - 1] && (pair[str[str.length - 2]] == str[str.length - 1]));

    if (str.length > 1 && (isFirstAndLastPairMatch || nextPairMatch || lastPairMatch)) {
      if (isFirstAndLastPairMatch) str = str.slice(1, str.length - 1);
      if (nextPairMatch) str = str.slice(2, str.length);
      if (lastPairMatch) str = str.slice(0, str.length - 2);
      check(str);
    }
    else console.log("Invalid String");
  }
  else console.log("Valid String");
}


check('{[]}');

// Outputs:
// {()[()]}
// ()[()]
// [()]
// ()
// Valid String


// {[(}
// [(
// Invalid String
