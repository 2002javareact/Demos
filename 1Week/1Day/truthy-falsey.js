// in js we have truthy and falsey values
// this means, in a boolean context we can convert any variable to a bool

function tFCheck(a) {
    if(a){
        console.log(`${a} is truthy`)
    } else {
        console.log(`${a} is falsey`)
    }
    //exactly the same in effect 
    a ? console.log(`${a} is truthy`) : console.log(`${a} is falsey`);
}


tFCheck(null)
tFCheck(undefined)
tFCheck(NaN)
tFCheck(0)
tFCheck(false)
tFCheck('')
tFCheck({})
tFCheck([])
tFCheck(tFCheck)