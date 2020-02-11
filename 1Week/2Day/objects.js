// objects are a reference type
// store related data and behaviours
// in js, every object is a collection of key value pairs
// the key is the name of a field on the object, and the value is the value for that field
// 

const circle = {
    radius:10,
    area:314.15,
    color:{
        id:1,
        color:'red'
    },
    spin: ()=>{
        console.log('wee');  
    }
}// I can make an object literal

console.log(`this circle's color is ${circle.color.color}`);
console.log(`this circle's color is ${circle['color']['color']}`);

circle.spin()

circle.shrink = () => {
    console.log('I\'m getting smaller');  
}//objects in js are dynamic
//we can add new properties whenever we want

circle.shrink()



