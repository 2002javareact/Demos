//var has two scopes, gobal and function
// let and const have 3 scopes, global function and block

//these are in global scope
var a = 10;
let b = 12;


function test() {
    //var a;

    console.log('a = ' + a + ' b = ' + b)
    a = 22
    b = 33

    //console.log('c = ' + c);
    
    //this is a new block of code
    if(true){
        var a = 0//whenever we use var, it gets hoisted. This means its effectively declared at the top of the function
        let d = 100
        log(d)
    }// in most languages, after this line of code d and c no longer exist
    console.log('a = ' + a);
    console.log('d = ' + d);
    
    
    
}


test()