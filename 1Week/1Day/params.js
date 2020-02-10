let mathFunk = (a,b,c) => {
    return (a + b) /c
}




console.log(mathFunk());
// in js we can pass in any number of arguements, no matter what
//JS HAS NO FUNCTION OVERLOADING

console.log((mathFunk(1)));

// in js, we can set a default value for a param
let mathFunk2 = (a,b,c=1) => {
    return (a+b)/c
}

//we also can get access to extra params
let avg = (a,b,...params) => {
    let total = 0
    for(let i = 0; i < params.length; i++){
        total += params[i]
    }
    return total/params.length
}

console.log(avg(1,2, 10, 16, 23, 44));
