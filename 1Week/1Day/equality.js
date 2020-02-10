// in js we have two ways to check for equality
// == ===
// == will do type coercion and compare value
// === will comapre the types and the values

let a = 5
let b = 'hello'
if(a == b){
    console.log('a == b');
}
if(a === b){//always use triple equals
    console.log('a === b');
}else {
    console.log('a !== b');
}