import { IHouse } from './interface'
//we can import things from other files


// we are allowed exactly one default export per file
// the default export can be imported without knowing its exact name
export default class House implements IHouse {
    bedrooms:number
    numDoors:number
    baths:number
    rent:number
    tenets:string[]
    // in ts for constructors or functions, we have to match params exactly
    // the question mark makes the param optional, so we can include or exclude both are ok
    constructor(bedrooms:number, numDoors:number, baths:number, rent:number = 1000, tenets?:string[]){
        this.bedrooms = bedrooms
        this.numDoors = numDoors
        this.baths = baths
        this.rent = rent
        this.tenets = tenets || null//default operator

    }

    liveIn(){
        return this.tenets
    }

}