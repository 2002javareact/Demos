
let computer = {}

//first step, have an outer function
function makeComputerTouchScreenGetterSetter(){
    //2nd step have a variable
    let touchScreen = 'Couldn\'t afford one'
    console.log(touchScreen);
    
    // step 3 make an inner function
    let touchScreenGetter = ()=>{
        return touchScreen
    }
    // step 3 make an inner function
    let touchScreenSetter = (newTouchScreen) => {
        touchScreen = newTouchScreen
    }
    //step 4 make sure we can access the inner function/s after the outer completes
    return [touchScreenGetter,touchScreenSetter]
}   

let [getTouchScreen, setTouchScreen] = makeComputerTouchScreenGetterSetter(computer)
computer.getTouchScreen = getTouchScreen
computer.setTouchScreen = setTouchScreen
console.log(computer.getTouchScreen())
console.log(touchScreen)