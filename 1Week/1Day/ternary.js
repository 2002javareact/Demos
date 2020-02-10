//some js expression ? if its true : if its false

let a = 1

a ? 
console.log('a was true') 
: 
console.log('a was false');
//do not nest ternaries, they are hard to read

true ? false ? true ? a = 10 : a = 11 : a = 12 : a = 13
