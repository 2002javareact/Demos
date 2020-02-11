//prototypal inheritance
//its really just inheritance coming from objects instead of classes
// this allows for some cool stuff, like changing parents while the code is running
// it helps enable duck typing

let parent = {
    legs:2,
    genus:'canus'
}

let child = {
    legs:8,
    teeth:false
}
//bad way
child.__prototype__ = parent
Object.setPrototypeOf(child,parent)
console.log(child.hairyness)
Object.prototype.hairyness = 'A lot'
console.log(child.hairyness)
console.log(Object.getPrototypeOf(parent));

let obj3 = {}

console.log(obj3.hairyness);

Object.setPrototypeOf(obj3, parent)
