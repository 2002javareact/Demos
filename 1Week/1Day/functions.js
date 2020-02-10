// key pieces of doing things in js
// function exists to re use code
// describe certain behavior and have an implementation to achieve that behavior

// paramaters
// 
function myFunk(a, b) {
    return a + b
}
console.log(myFunk(10,4));

let res = myFunk(20,2)
console.log(res);

//up next we have arrow functions, lso called anonymous functions

let mathFunc = (a,b,c) => {
    return (a + b) / c
}




console.log(mathFunc(10,5,3))