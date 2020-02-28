let blue = document.getElementById('1')
let green = document.getElementById('2')
let red = document.getElementById('3')
let purple = document.getElementById('4')

blue.addEventListener('click', () => {
    setTimeout( () => {
        console.log(blue.style);
        if (!blue.style.backgroundColor) {
            blue.style.backgroundColor = "blue"
        } else {
            blue.style.backgroundColor = ""
        }
    },500)
},true)

green.addEventListener('click', () => {
    setTimeout( () => {
        console.log(green.style);
        if (!green.style.backgroundColor) {
            green.style.backgroundColor = "green"
        } else {
            green.style.backgroundColor = ""
        }
    },1000)

},true)

red.addEventListener('click', () => {
    setTimeout( () => {
        console.log(red.style);
        if (!red.style.backgroundColor) {
            red.style.backgroundColor = "red"
        } else {
            red.style.backgroundColor = ""
        }
    },1500)
},true)

purple.addEventListener('click', () => {
    setTimeout( () => {
        console.log(purple.style);
        if (!purple.style.backgroundColor) {
            purple.style.backgroundColor = "purple"
        } else {
            purple.style.backgroundColor = ""
        }
    }, 2000)
},true)