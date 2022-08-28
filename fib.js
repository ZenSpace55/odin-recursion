function iterativeFib(n){
    let fib = [];
    let num = 0;
    for (let i = 0; i <= n; i++){
        if (i < 2){
            num = i;
        }
        else{
            num = fib[i-1] + fib[i-2];
        }
        fib.push(num);
    }
    return fib;
}

function recursiveFib(n){
    if (n < 2){
        return n;
    }
    else{
        return recursiveFib(n-2) + recursiveFib(n-1);
    }
}

console.log(iterativeFib(9));
console.log("RECURSIVE FIB: " + recursiveFib(9));
console.log(iterativeFib(11));
console.log("RECURSIVE FIB: " + recursiveFib(11));
console.log(iterativeFib(2));
console.log("RECURSIVE FIB: " + recursiveFib(2));