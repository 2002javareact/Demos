let data = [
    {
        name:'Jesus',
        favColor:'Blue',
        likeJs:true,
        shoeSize:9
    },{
        name:'Anthony',
        favColor:'Green',
        likeJs:true,
        shoeSize:9.5
    },{
        name:'Ahmad',
        favColor:'Black',
        likeJs:true,
        shoeSize:9.5
    },{
        name:'Nikoloi',
        favColor:'Blue',
        likeJs:false,
        shoeSize:10
    },{
        name:'Ramel',
        favColor:'Green',
        likeJs:false,
        shoeSize:12
    }
]

// foreach will execute the callback function we give
// on every element in the array
// foreach does not follow functional programming standards
// it does modify the original array
data.forEach((ele,index,array)=>{
    console.log(`name is ${ele.name} and shoesize is ${ele.shoeSize} and index in array is ${index}`);
    
})

//the body of the for of loop, looks alot like the body of the foreach cb function
for(let ele of data){
    console.log(`name is ${ele.name} and shoesize is ${ele.shoeSize}`);
}