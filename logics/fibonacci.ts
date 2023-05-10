const n = 10;

// Generate fibonacci series up to n terms
let n1 = 0, n2 = 1;
let list = new Array();

for (let i = 0; i <= n - 1; i++) {
    if (i == 0 || i == 1) list.push(i);
    else list.push(list[i - 1] + list[i - 2]);
}

console.log('Fibonacci Series: ', list);


// Fibonacci series:
function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(`The ${n}th term of the Fibonacci series is: `, fibonacci(n));