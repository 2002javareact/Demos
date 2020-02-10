// what are our types
// types exist, they can change 'dynamic'
// we don;t specify

function typeCheck(a){
    console.log(`a has a value of ${a} and a type of ${typeof(a)}`);
    
}


typeCheck(0)
typeCheck(10.5)
typeCheck('Nikoloi')
typeCheck("double quote string")
typeCheck(true)
typeCheck(false)
typeCheck(Infinity)
typeCheck(null)
typeCheck(NaN)
typeCheck(undefined)
typeCheck(typeCheck)
typeCheck([1,1,1,1])
typeCheck({})