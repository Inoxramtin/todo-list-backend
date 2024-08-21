import { query } from '../../core/database/database-handler.js';



async function getUsersById(id){
    const sql = 'SELECT * FROM users WHERE id = $1'
    const result = await query(sql, [id]);
    return result.rows;
    
}

async function createUsers(first_name,last_name , number,username,password){
    const sql = `
    INSERT INTO users
    (first_name, last_name, number, username,password)
    values
    ($1 , $2 , $3, $4, $5);
    `;
    const result = await query(sql,[first_name, last_name, number, username,password]);
    return result;
}




async function updateUsers(id,first_name,last_name , number,username,password){
const sql = `
UPDATE users SET first_name=$1 ,last_name= $2 , number= $3,username= $4,password= $5
 WHERE id = $6 `
const result = await query(sql, [first_name, last_name, number, username,password,id]);
return result;

}