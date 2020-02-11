
function one(){
    // has a value of 0
    let x = 0
    // obj has a value 0xffabb5711f
    let obj = {
        num:10
    }
    // x should be 0 num should be 10
    console.log(`x = ${x} and obj num = ${obj}`);
    
    second(x, obj)
    // x should be 1 and num should be 11
    console.log(`x = ${x} and obj num = ${obj}`);
}

function second(y, obj) {
    // this x is a new variable that has the same value as the arguement we passed in
    y++
    //obj is a new variable that has the same as as the arguement
    //0xffabb5711f
    obj.num++
}

one()

const obj = {
    num:10
}

obj.num++

obj = {
    some:'thing new'
}
