import { query } from '../../core/database/database-handler.js';



async function createCategory(name_category,user_id){
    const sql = `
    INSERT INTO category
    (name_category, user_id)
    values
    ($1,$2);
    `;
    const result = await query(sql,[name_category,user_id]);
    return result;
}


async function updateCategory(userId,newNameCategory,name_category){
    const sql = `
    UPDATE Category SET name_category = $1
     WHERE name_category = $2 AND user_id = $3 RETURNING * `
    const result = await query(sql, [newNameCategory,name_category,userId]);
    return result;
    
    }
async function deleteCategory(userId, name_category){
        const sql = `DELETE 
        FROM category
         WHERE name_category = $1 AND user_id = $2`
         const result = await query(sql,[name_category,userId]);
         return result;
    
    }


export{
    createCategory,
    updateCategory,
    deleteCategory
}