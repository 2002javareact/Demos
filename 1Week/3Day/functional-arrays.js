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



// I want the set of favorite colors from people who don't like js
let filteredData = data.filter((element)=>{
    //return true, if I want the new array to contain the element
    if(element.likeJs){
        return false
    } else {
        return true
    }
})

let mappedData = filteredData.map((element)=>{
    // with a map function we return an object to replace the element in the new array
    return {
        favColor:element.favColor
    }
})

let reducedData = mappedData.reduce((prevValue, nextElement)=>{
    if(prevValue.includes(nextElement.favColor)){
        return prevValue
    }else{
        prevValue.push(nextElement.favColor)
        return prevValue
    }
}, [])


console.log(data);
console.log(filteredData);
console.log(mappedData);
console.log(reducedData);

let result = data.filter((element)=>{
    //return true, if I want the new array to contain the element
    if(element.likeJs){
        return false
    } else {
        return true
    }
}).map((element)=>{
    // with a map function we return an object to replace the element in the new array
    return {
        favColor:element.favColor
    }
}).reduce((prevValue, nextElement)=>{
    if(prevValue.includes(nextElement.favColor)){
        return prevValue
    }else{
        prevValue.push(nextElement.favColor)
        return prevValue
    }
}, [])



