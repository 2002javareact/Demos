// we have mostly the same types as in JS
// but qwwe have a couple additional ones as well
// to declare a variable of a certain type we use this syntax
let myVariable:number = 10;
// so let, varname : type = value
// if we don't put the type explicitly
// ts will infer the type from the value
let myNum = 0

// I can make complex types using the or character in the type
let variable3:number | string = 10
variable3 = 'a string'

let myS:string;
let nyNUm:number;
let myBool:boolean;
let myObj:object
let myArr: number[] | string[] //arrays have one fixed type now
let myJsVar:any;// this makes it act just like a js variable

let myVoid:void;// a function that returns nothing, has a type of void
let myNull:null; // null and undefined are a little special
let myUndefined:undefined; // they are subtypes of all other types
enum Color {Red, Black, Blue}// these are object types I've created
let myColor:Color// this can be any of the types in the enum color
let myTuple: [number,number,number] // this variable is always and array of size 3 that has 3 numbers
let myNever:never// a special type that signifies code that can't be reached


let myError:Error = new Error()


function myF () {
    throw new Error()
    return 'this'
}

