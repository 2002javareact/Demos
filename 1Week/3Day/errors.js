// in javascript we only have errors
// there are no such things as exceptions
// however, errors work much like exceptions would in other languages

try {//In a try block we execute the code like normal but if any errors are thrown
    //we stop executing the code and give that error object to the catch statement
    let nikoloisLogin
    if (!nikoloisLogin) {

        //make an error
        throw new Error('This is an error')
    }
    //err is the object that represents the error we caught
}catch(thisisanerror){
    thisisanerror.message
    //any error handling we want to do we can do here

    //logtoDB('SomeoneFailed this')

    //this is also a common pattern, where we can throw a new error with more info
    //throw new MoreComplicatedError()
} finally {
    //special block that always runs after either the try finishes, or the catch finishes
    // for closing resources
    // close a connection to a database
    // close an open file
    //file && file.close()
}
//try and catch are important