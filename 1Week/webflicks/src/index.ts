import * as express from 'express'
// I call this express function, and it returns an object I can use to build my api
const app = express()

// what does .use do? we'll talk about in a second
app.use('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(2002, ()=>{
    console.log('app has started on port 2002');
})