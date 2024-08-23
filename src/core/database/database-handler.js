import pg from 'pg'
import { POSTGRES_CREDENTIALS } from '../secrets/index.js';

const { Client } = pg;

const query = async (query , params) =>{
    let client;
    try {
        console.log("query try")
        client = new Client(POSTGRES_CREDENTIALS);
        await client.connect();
        const res = await client.query(query, params)
        return res;
     } catch (err) {
         throw err;
     } finally {
        console.log("query finally")
        await client.end()
     }
     
}

export{
    query
};