// I can make a class, since es6
// but internally js just makes a function constructor
class circle {
    radius = 0
    area = 0
    color = {
        id:1,
        color:'red'
    }
    constructor(radius){
        this.radius = radius
        this.area = 3.1415 * radius^2

    }

    spin() {
        console.log('wee');
        
    }
}


let myCircle = new circle()