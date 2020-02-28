// we write the code the test our auth middleware

//mock request is an object constructor for fake request objects
const mockRequest = ()=>{
    //
    return {
        session:{
            user:{
                role:''
            }
        }
    }
}
// lets mack a mock response constructor as well
const mockResponse = () => {
    let res:any = {}
    res.status = jest.fn().mockReturnValue(res)// explicitly state what a function should return using a jest mock function
    res.send = jest.fn().mockReturnValue(res)
    return res;
}




import {authAdminMiddleware} from '../../src/middleware/auth-midleware'
// to build a suite of tests in jest 
// we use the word describe
describe('authAdminMiddleware', ()=>{
    //this is where all the tests go
    let req;
    let res;
    let next

    beforeEach(()=>{
        req = mockRequest()
        res = mockResponse()
        next = jest.fn()
    })
    // this will run a single test
    it('should allow an admin through', () =>{
        //set up test
        req.session.user.role = 'Admin'
        //call the function
        authAdminMiddleware(req,res,next)
        // now we write some assertations
        expect(next).toBeCalled()
        expect(res.send).not.toBeCalled()
    })

    it('should not allow a non admin through', () =>{
        //set up test
        req.session.user.role = 'User'
        //call the function
        authAdminMiddleware(req,res,next)
        // now we write some assertations
        expect(next).not.toBeCalled()
        expect(res.send).toBeCalled()
        expect(res.status).toBeCalledWith(403)
    })

    it('should not allow an un-logged in user', () =>{
        //set up test
        req.session.user = undefined
        //call the function
        authAdminMiddleware(req,res,next)
        // now we write some assertations
        expect(next).not.toBeCalled()
        expect(res.send).toBeCalled()
        expect(res.status).toBeCalledWith(401)
    })

})