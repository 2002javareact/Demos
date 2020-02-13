// anything we export is accessible to other files
export interface IHouse {
    numDoors: number
    bedrooms: number
    baths: number
    rent: number
    liveIn:()=>string[]//the type for a function
    //we have ( param:type) => return type
}