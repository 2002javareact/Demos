import { Request, Response } from "express";


export function corsFilter(req:Request,res:Response,next){
    res.header('Access-Control-Allow-Origin', `${req.headers.origin}`)//this is a hack, never do it in a real application
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE')
    if(req.method === 'OPTIONS'){
        //this is where we send the 'Pre Flight Response
        res.sendStatus(200)
    }else{
        next()
    }

}