
// step one find the button
let button = document.querySelector(".jumbotron .container button")
button.addEventListener('click', getApiJokeFetch)



let httpReq
// this is the ancient XHR ajax request
// ajax? Asynchronous Javascript and Xml - now adays this means any http request
function getJokeApiCall(){
    httpReq = new XMLHttpRequest()
    if(!httpReq){
        console.log('try again in a bit');
    }else {
        // this is a callback function that XHR will run every time its state changes
        httpReq.onreadystatechange = CNJokeApiStateChangeHandler
        httpReq.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true)
        httpReq.send()
    }
}

function CNJokeApiStateChangeHandler(){
    console.log(httpReq.readyState);
    
    if(httpReq.readyState === XMLHttpRequest.DONE){
        console.log(JSON.parse(httpReq.responseText));
        let card = document.getElementById('card-1')
        card.children[1].children[1].innerText = JSON.parse(httpReq.responseText).value.joke
    }
}

// fetch is built on top of the XHR api
// under the hood it uses XmlHttpRequest
// but it makes it much easier for us to write code
async function getApiJokeFetch(){
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    console.log(response);
    if(response.status === 200){
        const resBody = await response.json()
        let card = document.getElementById('card-1')
        let newJoke = document.createElement('p') // create a new node
        newJoke.innerText = resBody.value.joke // set text value <p>"This is the Text Value"   </p>
        card.children[1].appendChild(newJoke) // add to end of parent node
    }  
}