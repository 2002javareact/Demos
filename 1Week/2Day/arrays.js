// what is an array?
// its a data collection that has an index and generally stores the order things were added to it
// we can access the data by the index, and duplicates are allowed

let arr = [
    10,
    23,
    42,
    'Hellworld',
    {
        name:'Ramel'
    },
    [1,2,'blue'],
    ()=>{
        console.log('whoopee');
    }
]



console.log(arr);

// we start counting arrays at 0
console.log(arr[4]);

arr.push('this string gets added to the end of the array')
arr.unshift('this string gets added to the front of the array')

console.log(arr);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}

console.log(arr[12]);

// to our first enhanced for loop
// this is the for of loop
// the for of loop is for arrays and other data collections
for(let thing of arr){
    //as I loop the array
    //the var thing will equal arr[0] ..... arr[length-1]
    console.log(thing);
    
}//I recommend using the for of loop whenever possible
// it will never take you out of bounds and always hits every value once
// the only downside, is it does not allow access to the index of the thing


//2d arrays are useful
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

matrix[0][1]