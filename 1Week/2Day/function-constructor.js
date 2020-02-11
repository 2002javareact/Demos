// functions are objects, and they are a little special
// because they have access to themselves

function circle(radius) {
    //every function has a this which refers to their own object
    this.radius = radius;
    this.area = 3.1415 * radius^2
    this.color = {
        id:1,
        color:'red'
    },
    this.spin = ()=>{
        console.log('wee');
    }
}
//we can use the new keyword to make a copy of a functions object
let myCircle = new circle(4)

// the one distinction between an arrow function and a normal one
// is that arrow functions have no this
// this means they cannot be used for building objects
let arrowCircle = (radius) =>{
    //every function has a this which refers to their own object
    this.radius = radius;
    this.area = 3.1415 * radius^2
    this.color = {
        id:1,
        color:'red'
    },
    this.spin = ()=>{
        console.log('wee');
    }
}
