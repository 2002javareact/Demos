
let v = 'hello'
switch (v) {
    case 10:{
        console.log('v is 10');
        
        break;//every case should have a break
    }
    case 'hello': {
        console.log(' v is hello');
        // don't do this
        //always break in every case
    }  
    case true: {
        console.log('v is true');
        
        break
    }
    default://should probably be last, 
        break;
}