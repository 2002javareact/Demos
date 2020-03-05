import { InternalServerError } from "../../errors/InternalServerError";

export async function getApiJokeFetch(){
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
    console.log(response);
    if(response.status === 200){
        const resBody = await response.json()
       return resBody.value.joke   
    }  else {
        //we should check status codes to throw an appropriate error
        throw new InternalServerError();
    }
}