// the spread operator looks like this ...
// we can use it with objects and arrays
// its purpose is to copy all of the field of an object or the lements of an array into a new one

let arr1 = [1,2,3,4]

let arr2 = [...arr1]//this is going to copy every element from arr1 and add it to arr2


function f (a,b,c,d){
    console.log(`a = ${a} b = ${b} c = ${c} d = ${d}`);
    

}
arr2.push(5)
console.log(arr1);
console.log(arr2);

f(...arr1)// example of when people use the spread operator