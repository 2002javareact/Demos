// destructuring is a way to extract fields from an object or array
// directly into a variable with the same name

let user = {
    name:'Alec',
    position:{
        name:'trainer',
        id:1,
        location:{
            id:2,
            address:'60-75 Kissana Blvd'
        }
    }
}
// all these curly braces do, is search the thing on the right for a field called the thing on the left and then set it to that value
let { address, id } = user.position.location
console.log(address);

let arr = [1,2]
// array destructuring we grab by index and stick into the new variables on the left
let [first,second] = arr 

console.log(first);
console.log(second);


