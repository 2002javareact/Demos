import { Pool } from 'pg';
// we can have one index.ts for every folder, it is the entrypoint for that folder

//this is where we will set up our connection factory
// one of the most expensive parts of connecting to a db
// is making the connections
// so what we do, is make all of the connections when the server starts
// and then we put them in a pool, and functions can ask the pool to borrow a connection
// functions have to give that connection back, when they are done

export const connectionPool:Pool = new Pool({
    host:process.env['WEBFLICKS_HOST'],//endpoint for db
    user:process.env['WEBFLICKS_USER'],//user name
    password:process.env['WEBFLICKS_PASSWORD'],//user password
    database:process.env['WEBFLICKS_DB_NAME'],//db name
    port:5432,//port for db
    max:5// max connections in free tier db 
})