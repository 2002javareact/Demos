// big rule, always call either res or next

export const authAdminMiddleware = (req,res,next)=>{
    if(!req.session.user){
        res.status(401).send('Please Login')
    }else if(req.session.user.role === 'Admin'){
        next()
    } else {
        res.status(403).send('You are UnAuthorized for this endpoint')
    }
    
} 

export const authUserMiddleware = (req,res,next) => {
    if(!req.session.user){
        res.status(401).send('Please Login')
    }else if(req.session.user.role === 'Admin' || req.session.user.id === +req.params.id ){
        next()
    } else {
        res.status(403).send('You are UnAuthorized for this endpoint')
    }
}
// I give it a variable config input
// it gives me a function
export const authFactory = (roles:string[]) => {
    return (req,res,next) => {
        // this checks that you are logged in
        if(!req.session.user){
            res.status(401).send('Please Login')
        // is there is the special role Everyone, allow them in
        } else if(roles.includes('Everyone')){
            next()
        } else {
            let allowed = false
            // loop through all of the allowed roles
            for(let role of roles){
                // see if user has a matching role
                if(req.session.user.role === role){
                    allowed = true
                    next()
                }
            }
            if(!allowed){
                res.status(403).send('You are UnAuthorized for this endpoint')
            }
            
        }
    }
}

// match user id to path param id
export const authCheckId= (req,res,next) => {
    //TODO
    // Allow through automatically, people that aren't users
    
    if(req.session.user.role === 'Admin'){
        next()
    }else if(req.session.user.id === +req.params.id ){
        next()
    } else {
        res.status(403).send('You are UnAuthorized for this endpoint')
    }
}