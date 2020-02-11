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
}


// our next enhanced for loop is for objects only
// it will grab all of the names of the fields in that object
// this means its getting the keys, not the values
for(let key in circle){
    console.log(circle[key]);
}