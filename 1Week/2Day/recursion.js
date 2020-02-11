// what is recursion
// its when a function calls itself
// one of the most important rules when doing recursion
// is having a base case
// a base case is when you tell the function to stop doing recursion

function fib(n) {
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    return fib(n-1) + fib(n-2)
}

//fib(100)
//fib(99)     //fib(98)
//fib(98)  fib(97)     //fib(97)    fib(96)


console.log(fib(100));
